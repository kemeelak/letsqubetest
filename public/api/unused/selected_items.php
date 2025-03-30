<?php
require __DIR__ . '/../lib/db_conn.php';
require __DIR__ . '/../lib/view_qube.php';

$view_qube = new view_qube();

if (empty($_GET['quber_detail'])) return;

$ident = $_GET['quber_detail'];
$show_selected = $view_qube->show_U_Bring($ident);

if ($show_selected[2] == 0) {
	// no such thing so     
	http_response_code(403);
	echo json_encode(["sent" => false, "message" => "does not exist!"]);
	die();
}

$list_Invited = $view_qube->viewSpecificWHOQube($ident);

if ($list_Invited[2] == 0) {
	http_response_code(403);
	echo json_encode(["sent" => false, "message" => "does not exist!"]);
	die();
}


foreach ($list_Invited[1] as $row) {
	$email = $row['qube_email'];
	$show_lists_selected = $view_qube->check_U_Bring($ident, $email);
	$invited_selected_lists = array();

	foreach ($show_lists_selected[1] as $ram) {
		$invited_selected_lists[] = $ram['u_bring'];
	}

	if (!isset($myObj)) $myObj = new stdClass();
	$myObj->guests = $email;
	$myObj->items = $invited_selected_lists;

	$myJSON = json_encode($myObj);
	http_response_code(200);
	echo $myJSON;
}
