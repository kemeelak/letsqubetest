<?php include_once "db_conn.php"; // database connection 

/** 
 * event creation -> PARENT 
 * when           -> child
 * who            -> child
 * i bring        -> child
 * u bring        -> child
 * 
 */

/**       TBALE FORMATION HIERARY FOR THE LETSQUBE PROJECT
 *                
 *                          EVENT 
 *                            |
 *                            |
 *  ----------------------------------------------------------
 *  |            |                      |                    |
 *  |            |                      |                    | 
 *  |            |                      |                    | 
 * WHEN_________WHO..................I_BRING--------------U_BRING  
 *                                                           |
 *                                                           |    
 *                                                           |   
 *                                                           |
 *                                                CONFIRMAION_INVITATION
 *                                                           |         
 *                                                           | 
 *                                                           | 
 *                                                   CHOOSE__TO__BRING 
 */
$tbl_event = "CREATE TABLE IF NOT EXISTS `qube_event` (
	`id` int NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(id),
	`qube_email` varchar(100) NOT NULL,
	`qube_note` text NOT NULL,
	`qube_where` varchar(100) NOT NULL
)";
$query = mysqli_query($db, $tbl_event);
if ($query === TRUE) {
	echo "<h3>Event Table is created :) </h3>";
} else {
	echo "<h3>Event Table not created :(</h3>";
}


/// when table creation 

$tbl_wheb = "CREATE TABLE IF NOT EXISTS `qube_when` (
	`id` int NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(id),
	`eventID` int(11) NOT NULL,
	`when_time` timestamp NOT NULL
)";
$query = mysqli_query($db, $tbl_wheb);
if ($query === TRUE) {
	echo "<h3>When Table is created :) </h3>";
} else {
	echo "<h3>When Table not created :(</h3>";
}


# who table creation query

$tbl_who = "CREATE TABLE IF NOT EXISTS `qube_who` (
	`id` int NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(id),
	`eventID` int(11) NOT NULL,
	`qube_email` text NOT NULL
)";
$query = mysqli_query($db, $tbl_who);
if ($query === TRUE) {
	echo "<h3>Who Table is created :) </h3>";
} else {
	echo "<h3>Who Table not created :(</h3>";
}

#i_bring
$tbl_i_bring = "CREATE TABLE IF NOT EXISTS `qube_i_bring` (
	`id` int NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(id),
	`eventID` int(11) NOT NULL,
	`qube_items` text NOT NULL
)";
$query = mysqli_query($db, $tbl_i_bring);
if ($query === TRUE) {
	echo "<h3>I Bring Table is created :) </h3>";
} else {
	echo "<h3>I Bring Table not created :(</h3>";
}

#u_bring
$tbl_u_bring = "CREATE TABLE IF NOT EXISTS `qube_u_bring` (
	`id` int NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(id),
	`eventID` int(11) NOT NULL,
	`qube_items` text NOT NULL
)";
$query = mysqli_query($db, $tbl_u_bring);
if ($query === TRUE) {
	echo "<h3>U Bring Table is created :) </h3>";
} else {
	echo "<h3>U Bring Table not created :(</h3>";
}

# assign 
$tbl_confirmation = "CREATE TABLE IF NOT EXISTS `qube_confirm` (
	`id` int NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(id),
	`eventID` int(11) NOT NULL,
	`email` text NOT NULL,
	`q_status`  int(11) NOT NULL
)";
$query = mysqli_query($db, $tbl_confirmation);
if ($query === TRUE) {
	echo "<h3>Confirmation Table is created :) </h3>";
} else {
	echo "<h3>Confirmation Table not created :(</h3>";
}

# select to bring 

$tbl_I_willBring = "CREATE TABLE IF NOT EXISTS `qube_bring` (
	`id` int NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(id),
	`eventID` int(11) NOT NULL,
	`u_bring`  int(11) NOT NULL,
	`email` text NOT NULL
)";
$query = mysqli_query($db, $tbl_I_willBring);
if ($query === TRUE) {
	echo "<h3>Ok will bring Table is created :) </h3>";
} else {
	echo "<h3>Ok will bring Table not created :(</h3>";
}

//header("Location: ../login"); 