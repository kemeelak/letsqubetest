<?php
class update_qube extends db_letsqube
{

	public function __construct()
	{
		$this->initDBO();
	}

	public function updateEvent($qube_email, $qube_note, $qube_where, $id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("UPDATE qube_event set qube_email=:qube_email, qube_note=:qube_note, qube_where=:qube_where WHERE id=:id ) ");
			$stmt->bindParam("qube_email", $qube_email);
			$stmt->bindParam("qube_note", $qube_note);
			$stmt->bindParam("qube_where", $qube_where);
			$stmt->bindParam("id", $id);
			$stmt->execute();

			$stat[0] = true;
			$stat[1] = 'success';
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// record where 

	public function updateWhen($when_time, $eventID)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("UPDATE qube_when set when_time=:when_time where eventID=:id) ");
			$stmt->bindParam("eventID", $eventID);
			$stmt->bindParam("when_time", $when_time);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// record who 

	public function updateWho($qube_email, $eventID)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("UPDATE qube_who set qube_email=:qube_email where eventID=:eventID) ");
			$stmt->bindParam("eventID", $eventID);
			$stmt->bindParam("qube_email", $qube_email);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// record who 

	public function update_I_bring($i_item, $id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("UPDATE qube_i_bring set qube_items=:i_item where eventID=:id");
			$stmt->bindParam("i_item", $i_item);
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}

	// record who 

	public function update_U_bring($u_item, $id)
	{
		$db = $this->dblocal;
		try {
			$stmt = $db->prepare("UPDATE qube_u_bring set qube_items=:u_item where eventID=:id");
			$stmt->bindParam("u_item", $u_item);
			$stmt->bindParam("id", $id);
			$stmt->execute();
			$stat[0] = true;
			$stat[1] = 'success';
			return $stat;
		} catch (PDOException $ex) {
			$stat[0] = false;
			$stat[1] = $ex->getMessage();
			return $stat;
		}
	}
}
