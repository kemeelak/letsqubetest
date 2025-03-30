<?php
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
$obj = json_decode($json, true);

$email_j = $obj['organizer'];
$where_j = $obj['location'];
$note_j = $obj['note?'];
$i_bring_j = $obj['alreadyHave?'];
$u_bring_j = $obj['toBring?'];
$inv_email_j = $obj['guests'];

if (!$email_j || !$where_j || !$i_bring_j || !$u_bring_j || !$inv_email_j) {
	http_response_code(400);
	echo json_encode(["sent" => false, "message" => "empty field detected"]);
	die();
}

// start entering into the database formats
$note = '';
$id     = $obj['id'];
$email  = $email_j;
$where  = $where_j;

if ($note_j != '') {
	$convert_apos = $note_j;
	$break = array("'");
	$real_note = str_replace($break, "&prime;", $convert_apos);
	$note   = $real_note;
}

$when   = $_POST['when'];
$i_brng = $i_bring_j;
$u_brng = $u_bring_j;
$inv_eml = $inv_email_j;

$query_evt = $upd_qube->updateEvent($email, $note, $where, $id);
$query_whn = $upd_qube->updateWhen($when, $id);
$query_who = $upd_qube->updateWho($inv_eml, $id);
$query_i_br = $upd_qube->update_I_bring($i_item, $eventID);
$query_u_br = $upd_qube->update_U_bring($i_item, $eventID);

if (!$query_evt[0] || !$query_whn[0] || !$query_who[0] || !$query_i_br[0] || !$query_u_br[0]) {
	http_response_code(400);
	echo json_encode(["sent" => false, "message" => "Error occured"]);
	die();
}

http_response_code(200);
echo json_encode(["sent" => true, "message" => "Update successful!"]);
