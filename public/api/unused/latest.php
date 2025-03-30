<?php
require __DIR__ . '/../lib/db_conn.php';
require __DIR__ . '/../lib/view_qube.php';

$view_qube = new view_qube();
$req_id_new = $view_qube->viewLatestQube();

if ($req_id_new[2] == 0) {
	http_response_code(403);
	echo json_encode(
		[
			"sent" => false,
			"message" => "No latest request"
		]
	);
	die();
}

$_id = $req_id_new[1]->id;
http_response_code(200);
echo json_encode(
	[
		"sent" => true,
		"id" => $_id
	]
);

$time_to = '';
$when_time = $view_qube->viewSpecificWhenQube($req_id_new[1]->id);
if ($when_time[2] != 0) {
	$time_to = array();

	foreach ($when_time[1] as $row) {
		$time_to[] = $row['startDate'] . ' - ' . $row['end_Date'];
	}
}

/** who is invited */
$who_invited = $view_qube->viewSpecificWHOQube($req_id_new[1]->id);
$invited_email = '';

if ($who_invited[2] != 0) {
	$invited_email = array();
	foreach ($who_invited[1] as $ram) {
		$invited_email[] = $ram['qube_email'];
	}
}

/** i bring */
$i_bring = $view_qube->viewSpecific_I_bring($req_id_new[1]->id);
$bring_me = '';

if ($i_bring[2] != 0) {
	$bring_me = array();

	foreach ($i_bring[1] as $rows) {
		$bring_me[] = $rows['qube_items'];
	}
}

/** u_bring */

$u_bring = $view_qube->viewSpecific_U_bring($req_id_new[1]->id);
$bring_u = '';

if ($u_bring[2] != 0) {
	$bring_u = array();

	foreach ($u_bring[1] as $rao) {
		$bring_u[] = $rao['qube_items'];
	}
}

if (!isset($myObj)) $myObj = new stdClass();

$myObj->organizer = $req_id_new[1]->qube_email;
$myObj->location = $req_id_new[1]->qube_where;
$myObj->note = $req_id_new[1]->qube_note;
$myObj->alreadyHave = $bring_me;
$myObj->toBring = $bring_u;
$myObj->dates = $time_to;
$myObj->guests = $invited_email;

$myJSON = json_encode($myObj);
http_response_code(200);
echo $myJSON;
