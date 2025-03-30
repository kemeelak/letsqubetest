<?php

/**
 * =======================================
 *  SUCCESS
 * success comes from failure
 * failure will make you think you lost...
 * =======================================
 * Hope, JUST BELIEVE
 */

require __DIR__ . '/../lib/db_conn.php';

require __DIR__ . '/../lib/view_qube.php';

$view_qube = new view_qube();

if (!empty($_GET['quber_detail'])) {

	$ident = $_GET['quber_detail'];

	$view_quber = $view_qube->viewSpecificQube($ident);
	if ($view_quber[2] == 0) {
		echo json_encode(["sent" => false, "message" => "Qube does not exist!"]);
	} else {

		$email = $view_quber[1]->qube_email;
		$where = $view_quber[1]->qube_where;
		$note = '';

		if ($view_quber[1]->qube_note == '') {
			$note = '';
		} else {
			$note = $view_quber[1]->qube_note;
		}


		$time_to = '';
		$when_time = $view_qube->viewSpecificWhenQube($ident);
		if ($when_time[2] == 0) {
			$time_to = '';
		} // nothing to display if there is none 
		else {
			$time_to = array();
			foreach ($when_time[1] as $row) {
				$time_to[] = $row['startDate'] . ' - ' . $row['end_Date'];
			}
		}
		$who_invited = $view_qube->viewSpecificWHOQube($ident);
		$invited_email = '';
		if ($who_invited[2] == 0) {
			$invited_email = '';
		} // nothing to display
		else {
			$invited_email = array();
			foreach ($who_invited[1] as $ram) {
				$invited_email[] = $ram['qube_email'];
				//$invited_email .= $ram['qube_email'].', ';
				//print $invited_email;
			}
		}

		$i_bring = $view_qube->viewSpecific_I_bring($ident);
		$bring_me = '';
		if ($i_bring[2] == 0) {
			$bring_me = '';
		} else {
			$bring_me = array();
			foreach ($i_bring[1] as $rows) {
				$bring_me[] = $rows['qube_items'];
			}
		}

		$u_bring = $view_qube->viewSpecific_U_bring($ident);
		$bring_u = '';
		if ($u_bring[2] == 0) {
			$bring_u = '';
		} else {
			$bring_u = array();
			foreach ($u_bring[1] as $rao) {
				$bring_u[] = $rao['qube_items'];
			}
		}


		if (!isset($myObj))
			$myObj = new stdClass();


		$myObj->organizer = $email;
		$myObj->location = $where;
		$myObj->note = $note;
		$myObj->alreadyHave = $bring_me;
		$myObj->toBring = $bring_u;
		$myObj->dates = $time_to;
		$myObj->guests = $invited_email;

		$myJSON = json_encode($myObj);
		echo $myJSON;
	}
} else {
	echo json_encode(["sent" => false, "message" => "Empty Field"]);
}
