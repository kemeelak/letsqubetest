<?php
require __DIR__ . '/../lib/db_conn.php';
require __DIR__ . '/../lib/add_qube.php';
require __DIR__ . '/../lib/view_qube.php';

$view_qube = new view_qube();
$add_qube = new add_qube();

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$eve_id_j = $obj['id'];
$email_j = $obj['email'];
$q_status_j = $obj['q_status'];

if ($eve_id_j == '' || $email_j == '' || $q_status_j) {
	http_response_code(400);
	echo json_encode(["sent" => true, "message" =>  'empty field detected please fill all mandatory fields']);
	die();;
}

$add_confirmation = $add_qube->record_confirm($eve_id_j, $email_j, $q_status_j);

if ($add_confirmation[0] == false) {
	http_response_code(400);
	echo json_encode(["sent" => false, "message" => "Error"]);
	die();
}

http_response_code(200);
echo json_encode(["sent" => true, "message" => "Successfull"]);
