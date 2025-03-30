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

if (empty($_GET['remove_evt'])) return;

$id = $_GET['remove_evt'];
$remove = $del_qube->removeEvent($id);

if (!$remove[0]) {
	http_response_code(403);
	echo json_encode(["sent" => false, "message" => "error on the database wrong id"]);
	die();
}

$remove_whn = $del_qube->removeWhenEVE($id);
$remove_who = $del_qube->removeWhoEVE($id);
$remove_I_br = $del_qube->remove_I_bring_EVE($id);
$remove_u_br = $del_qube->remove_U_bring_EVE($id);

if (!$remove_whn[0] || !$remove_who[0] || !$remove_I_br[0] || !$remove_u_br[0]) {
	http_response_code(400);
	echo json_encode(["sent" => false, "message" => "Error occured"]);
	die();
}

http_response_code(200);
echo json_encode(["sent" => true, "message" => "Removed successfully"]);
