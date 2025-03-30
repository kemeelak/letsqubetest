<?php
class del_qube extends db_letsqube
{

	public function __construct()
	{
		$this->initDBO();
	}

	public function removeEvent($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_event WHERE id=:id ");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}



	// remove when 

	public function removeWhen($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_when WHERE id=:id ");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	public function removeWhenEVE($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_when WHERE eventID=:id ");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	//remove who

	public function removeWHO($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_who WHERE id=:id ");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	public function removeWhoEVE($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_who WHERE eventID=:id ");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// remove i bring

	public function remove_I_bring($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_i_bring WHERE id=:id ");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	public function remove_I_bring_EVE($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_i_bring WHERE eventID=:id ");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// remove U_BRING 

	public function remove_U_bring($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_u_bring WHERE id=:id ");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	public function remove_U_bring_EVE($id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_u_bring WHERE eventID=:id ");
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// remove i will bring 
	public function remove_I_WILL_BRING($id, $eve)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("DELETE FROM qube_bring WHERE email=:id AND eventID=:eve");
			$stmt->bindParam("id", $id);
			$stmt->bindParam("eve", $eve);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			$stat[2] = $stmt->rowCount();
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}
}
