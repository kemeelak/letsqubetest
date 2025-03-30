<?php
class view_qube extends db_letsqube
{
	public function __construct()
	{
		$this->initDBO();
	}

	public function viewAllQube()
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT qube_email, qube_note, qube_where, id FROM qube_event ORDER BY id DESC");
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	//latest entry 

	public function viewLatestQube()
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT qube_email, qube_note, qube_where, id FROM qube_event ORDER BY id DESC LIMIT 1");
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetch(PDO::FETCH_OBJ);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// show specific qube event 
	public function viewSpecificQube($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT qube_email, qube_note, qube_where, id FROM qube_event WHERE id=:id");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetch(PDO::FETCH_OBJ);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	//show by email 

	public function viewSpecificQuber($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT qube_email, qube_note, qube_where, id FROM qube_event WHERE qube_email=:id");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// show by where 

	public function viewSpecificQuberLoc($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT qube_email, qube_note, qube_where, id FROM qube_event WHERE qube_where=:id");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// all quber and where 

	public function viewSpecificQuberLocEmail($loc, $email)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT qube_email, qube_note, qube_where, id FROM qube_event WHERE qube_where=:id AND qube_email=:email");
			$stmt->bindParam("loc", $loc);
			$stmt->bindParam("email", $email);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// time for the rest WHEN are related to the main event be viewed <too class=""></too>
	public function viewSpecificWhenQube($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT eventID, end_Date, startDate, id FROM qube_when WHERE eventID=:id");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// time for the rest WHO are related to the main event to be viewed

	public function viewSpecificWHOQube($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT eventID, qube_email, id FROM qube_who WHERE eventID=:id");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// show qube event and who 

	public function viewSpecificWHOQubeANDID($id, $email)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT eventID, qube_email, id FROM qube_who WHERE eventID=:id AND qube_email=:email");
			$stmt->bindParam("id", $id);
			$stmt->bindParam("email", $email);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// i bring u bring method 

	public function viewSpecific_I_bring($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT eventID, qube_items, id FROM qube_i_bring WHERE eventID=:id");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// u bring method 

	public function viewSpecific_U_bring($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT eventID, qube_items, id FROM qube_u_bring WHERE eventID=:id");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	/** confirmation */

	public function checkEmailConfirmation($id, $email)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT eventID, email, q_status FROM qube_confirm WHERE eventID=:id AND email=:email");
			$stmt->bindParam("id", $id);
			$stmt->bindParam("email", $email);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetch(PDO::FETCH_OBJ);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	public function checkConfirmation($id, $email, $q_stat)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT eventID, email, q_status FROM qube_confirm WHERE eventID=:id AND email=:email AND q_status=:q_stat");
			$stmt->bindParam("id", $id);
			$stmt->bindParam("email", $email);
			$stmt->bindParam("q_stat", $q_stat);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetch(PDO::FETCH_OBJ);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	/** begin by saying  */

	public function check_U_Bring($id, $email)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT eventID, email, u_bring FROM qube_bring WHERE eventID=:id AND email=:email");
			$stmt->bindParam("id", $id);
			$stmt->bindParam("email", $email);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	public function show_U_Bring($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("SELECT eventID, email, u_bring FROM qube_bring WHERE eventID=:id");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = $stmt->fetchAll(PDO::FETCH_ASSOC);
			$stat[2] = $stmt->rowCount();
			//$stat[3] = $stmt->fetch(PDO::FETCH_OBJ);
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}
}
