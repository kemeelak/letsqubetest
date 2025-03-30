<?php
require __DIR__ . '/lib/db_conn.php';
require __DIR__ . '/lib/view_qube.php';

$view_qube = new view_qube();

if (empty($_GET['quber_detail']) || empty($_GET['email_addr'])) {
	http_response_code(400);
	echo json_encode(["sent" => false, "message" => "Empty Field"]);
	die();
}

$ident = $_GET['quber_detail'];
$view_quber = $view_qube->viewSpecificWHOQubeANDID($ident, $_GET['email_addr']);

if ($view_quber[2] == 0) {
	http_response_code(403);
	echo json_encode(["sent" => false, "message" => "Either Qube does not exist or you are not invited!"]);
	die();
}

$check_user = $view_qube->checkEmailConfirmation($ident, $_GET['email_addr']);

if ($check_user[2] == 0) return;

$q_stat = $check_user[1]->q_status;
if ($q_stat == 'no') {
	http_response_code(200);
	echo json_encode(["confirm" => false, "message" => "You have rejected the invitation!"]);
	die();
}

$check_to_bring = $view_qube->check_U_Bring($ident, $_GET['email_addr']);

if ($check_to_bring[2] != 0) {
	http_response_code(200);
	echo json_encode(["confirm" => true, "message" => "You have Already Selected what you are going to bring!"]);
	die();
}

$email = $view_quber[1]->qube_email;
$where = $view_quber[1]->qube_where;
$note = $view_quber[1]->qube_note || '';
$time_to = '';
$when_time = $view_qube->viewSpecificWhenQube($ident);

if ($when_time[2] != 0) {
	$time_to = array();
	foreach ($when_time[1] as $row) {
		$time_to[] = $row['startDate'] . ' - ' . $row['end_Date'];
	}
}

$who_invited = $view_qube->viewSpecificWHOQube($ident);
$invited_email = '';

if ($who_invited[2] != 0) {
	$invited_email = array();
	foreach ($who_invited[1] as $ram) {
		$invited_email[] = $ram['qube_email'];
	}
}

$i_bring = $view_qube->viewSpecific_I_bring($ident);
$bring_me = '';

if ($i_bring[2] != 0) {
	$bring_me = array();
	foreach ($i_bring[1] as $rows) {
		$bring_me[] = $rows['qube_items'];
	}
}

$u_bring = $view_qube->viewSpecific_U_bring($ident);
$bring_u = '';

if ($u_bring[2] != 0) {
	$bring_u = array();
	foreach ($u_bring[1] as $rao) {
		$bring_u[] = $rao['qube_items'];
	}
}

if (!isset($myObj)) $myObj = new stdClass();

$myObj->organizer = $email;
$myObj->location = $where;
$myObj->note = $note;
$myObj->alreadyHave = $bring_me;
$myObj->toBring = $bring_u;
$myObj->dates = $time_to;
$myObj->guests = $invited_email;

$myJSON = json_encode($myObj);
http_response_code(200);
echo $myJSON;
