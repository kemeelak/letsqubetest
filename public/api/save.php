<?php
require_once __DIR__ . '/lib/_apiheader.php';
require __DIR__ . '/lib/db_conn.php';
require __DIR__ . '/lib/add_qube.php';
require __DIR__ . '/lib/update_qube.php';
require __DIR__ . '/lib/del_qube.php';
require __DIR__ . '/lib/view_qube.php';

$view_qube = new view_qube();
$del_qube = new del_qube();
$add_qube = new add_qube();
$upd_qube = new update_qube();

$json = file_get_contents('php://input');
$obj = json_decode($json, true) ?: array(
	"dates" => "",
	"organizer" => "",
	"location" => "",
	"note" => "",
	"alreadyHave" => "",
	"toBring" => "",
	"guests" => "",
);

$dates_j = $obj['dates'];
$email_j = $obj['organizer'];
$where_j = $obj['location'];
$note_j  = $obj['note'];
$i_bring_j = $obj['alreadyHave'];
$u_bring_j = $obj['toBring'];
$inv_email_j = $obj['guests'];

if ($email_j == '' || $where_j == '' || $inv_email_j == '' || $dates_j == '') {
	http_response_code(400);
	echo 'empty field detected! Please fill all mandatory fields';
	die();
}

$email = $email_j;
$where = $where_j;
$note = '';

if ($note_j) {
	$convert_apos = $note_j;
	$break = array("'");
	$real_note = str_replace($break, "&prime;", $convert_apos);
	$note =  $real_note;
}

$add_evt = $add_qube->recordEvent($email, $note, $where);

if (!$add_evt[0]) {
	http_response_code(400);
	echo json_encode(["status" => false, "message" => "ERROR while creating qube"]);
	die();
}

$show_lat = $view_qube->viewLatestQube();

if ($show_lat[2] == 0) {
	print 'nothing to show';
} else {
	$id = $show_lat[1]->id;
	$email = $show_lat[1]->qube_email;
	$where = $show_lat[1]->qube_where;
	$notes = '';
	$enc_id = $show_lat[1]->id;

	if (!empty($show_lat[1]->qube_note)) {
		$notes = '<HR>Important Note <BR>' . $show_lat[1]->qube_note;
	}

	foreach ($obj['dates'] as $date_rec) {
		$dates_Q = $date_rec['endDate'];
		$strt_D = $date_rec['startDate'];
		$add_when = $add_qube->recordWhen($id, $dates_Q, $strt_D);

		if (!$add_when[0]) print 'time is not added';
	}

	foreach ($obj['alreadyHave'] as $bfnig) {
		$i_bring = $bfnig;

		if (empty($i_bring)) continue;

		$enc_i_bring = $i_bring;
		$add_i_bring = $add_qube->qube_I_bring($id, $enc_i_bring);

		if (!$add_i_bring[0]) print 'I BRING is not added';
	}

	foreach ($obj['toBring'] as $zing) {
		$u_bring = $zing;

		if (empty($u_bring)) continue;

		$enc_u_bring = $u_bring;
		$add_u_bring = $add_qube->qube_U_bring($id, $enc_u_bring);

		if (!$add_u_bring[0]) print 'U BRING is not added';
	}

	foreach ($obj['guests'] as $ram) {
		$inv_email = $ram;
		$add_hu = $add_qube->qubeWho($id, $inv_email);

		if (!$add_hu[0]) print 'Guest is not added';
	}

	$whn_view = $view_qube->viewSpecificWhenQube($id);
	$who_view =  $view_qube->viewSpecificWHOQube($id);
	$i_br_viw = $view_qube->viewSpecific_I_bring($id);
	$u_br_viw = $view_qube->viewSpecific_U_bring($id);
	$i_bring = $i_br_viw[1]->qube_items;
	$u_bring = $u_br_viw[1]->qube_items;
	$dec_invit = '';
	$invited = '';

	foreach ($who_view[1] as $value) {
		$dec_invit = $value['qube_email'];
		$invited .= $dec_invit;
	}

	//$invited = $who_view[1]->qube_email;
	$starting_date = '';
	$ending_date = '';

	foreach ($whn_view[1] as $ram) {
		$starting_date .= $ram['startDate'] . ', ' . $ram['end_Date'] . ', ';
	}

	$invited_guests = ''; // null defined
	foreach ($obj['guests'] as $v) {
		$invited_guests .= $v;
	}

	include_once 'images/email-tem.php'; // email template

	$name   =    'LetsQube Event';
	$subject =    'Invitation from Letsqube';
	$msg =    $mail_body;
	$ToEmail = $email;
	$ToSubject = $subject;
	$EmailBody =   $msg . "\n";
	$Mess = $EmailBody;
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: ' . $email;

	foreach ($obj['guests'] as $v) {
		mail($v, $ToSubject, $Mess, $headers);
	}
}

http_response_code(200);
echo json_encode(["status" => true, "message" => "Qube Created"]);
