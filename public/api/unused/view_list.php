<?php

# viewing the list of files 

require __DIR__ . '/../lib/db_conn.php';
require __DIR__ . '/../lib/view_qube.php';
$view_qube = new view_qube();
$show = $view_qube->viewAllQube();
$output = '';

if ($show[2] == 0) {
	$output = '<tr><td colspan="4" align="center"><strong>No event added</strong></td></tr>';
} else {
	foreach ($show[1] as $row) {
		$id = $row['id'];
		$email = $row['qube_email'];
		$where = $row['qube_where'];
		$time_when = '';

		$enc_id = $row['id'];
		//get the time to start and end 

		$time_to = $view_qube->viewSpecificWhenQube($id);
		if ($time_to[2] == 0) {
			$time_when = 'Time is not given';
		} else {
			foreach ($time_to[1] as $ram);
			$time_when = $ram['when_time'];
		}


		$output .= '<tbody>';
		$output .= '<tr>';
		$output .= '<td>' . $email . '</td>';
		$output .= '<td>' . $where . '</td>';
		$output .= '<td>' . $time_when . '</td>';
		$output .= '<td><a class="btn btn-sm btn-primary" href="show.php?quber_detail=' . $enc_id . '" title="View Full Detail">Full Detail</a></td>';
		$output .= '</tr>';
		$output .= '</tbody>';
	}
}

print '<table class="table table-striped table-condensed table-bordered">
					<thead>
						<tr>
							<th align="center">Email</th>
							<th align="center">Location</th>
							<th colspan="2" align="center">Time</th>
						</tr>
					</thead>
					' . $output . '
				</table>';
