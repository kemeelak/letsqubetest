<?php
require __DIR__ . '/../lib/db_conn.php';
require __DIR__ . '/../lib/add_qube.php';
require __DIR__ . '/../lib/update_qube.php';
require __DIR__ . '/../lib/del_qube.php';
require __DIR__ . '/../lib/view_qube.php';

$view_qube = new view_qube();
$del_qube = new del_qube();
$add_qube = new add_qube();
$upd_qube = new update_qube();

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$dates_j     = $obj['dates'];
$u_bring_j   = $obj['toBring'];
$inv_email_j = $obj['guests'];
$id = $obj['eventID'];

if ($dates_j == '' || $u_bring_j == '' || $inv_email_j == '') {
	echo 'empty field detected! Please fill all mandatory fields';
	die();
}

foreach ($obj['toBring'] as $bbb) {
	$chosen = $bbb;

	if (empty($chosen)) continue;

	$enc_i_bring = $chosen;
	$add_i_bring = $add_qube->record_to_bring($id, $dates_j, $inv_email_j, $enc_i_bring);

	if (!$add_i_bring[0]) {
		http_response_code(400);
		echo json_encode(["sent" => true, "message" => "Error occured"]);
		die();
	}

	http_response_code(200);
	echo json_encode(["sent" => true, "message" => "Successfull"]);
}
