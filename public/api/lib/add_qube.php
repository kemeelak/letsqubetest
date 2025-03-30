<?php
class add_qube extends db_letsqube
{
	public function __construct()
	{
		$this->initDBO();
	}

	private function responseError($pdoException) {
		$stat[0] = false;
		$stat[1] = $pdoException->getMessage();
		return $stat;
	}

	private function responseSuccess() {
		$stat[0] = true;
		$stat[1] = 'success';
		return $stat;
	}

	public function recordEvent($qube_email, $qube_note, $qube_where)
	{
		try {
			$stmt = $this->dblocal->prepare("INSERT INTO qube_event(qube_email, qube_note, qube_where) VALUES(:qube_email, :qube_note, :qube_where) ");

			$stmt->bindParam("qube_email", $qube_email);
			$stmt->bindParam("qube_note", $qube_note);
			$stmt->bindParam("qube_where", $qube_where);
			$stmt->execute();
			
			return $this->responseSuccess();
		} catch (PDOException $ex) {
			return $this->responseError($ex);
		}
	}

	// record where 

	public function recordWhen($eventID, $when_time, $end_game)
	{
		try {
			$stmt = $this->dblocal->prepare("INSERT INTO qube_when(eventID, end_Date, startDate) VALUES(:eventID, :when_time, :end_game) ");

			$stmt->bindParam("eventID", $eventID);
			$stmt->bindParam("when_time", $when_time);
			$stmt->bindParam("end_game", $end_game);
			$stmt->execute();

			return $this->responseSuccess();
		} catch (PDOException $ex) {
			return $this->responseError($ex);
		}
	}

	// record who 

	public function qubeWho($eventID, $qube_email)
	{
		try {
			$stmt = $this->dblocal->prepare("INSERT INTO qube_who(eventID, qube_email) VALUES(:eventID, :qube_email) ");

			$stmt->bindParam("eventID", $eventID);
			$stmt->bindParam("qube_email", $qube_email);
			$stmt->execute();

			return $this->responseSuccess();
		} catch (PDOException $ex) {
			return $this->responseError($ex);
		}
	}

	// record who 

	public function qube_I_bring($eventID, $i_item)
	{
		try {
			$stmt = $this->dblocal->prepare("INSERT INTO qube_i_bring(eventID, qube_items) VALUES(:eventID, :i_item) ");

			$stmt->bindParam("eventID", $eventID);
			$stmt->bindParam("i_item", $i_item);
			$stmt->execute();

			return $this->responseSuccess();
		} catch (PDOException $ex) {
			return $this->responseError($ex);
		}
	}

	// record who 

	public function qube_U_bring($eventID, $u_item)
	{
		try {
			$stmt = $this->dblocal->prepare("INSERT INTO qube_u_bring(eventID, qube_items) VALUES(:eventID, :u_item) ");

			$stmt->bindParam("eventID", $eventID);
			$stmt->bindParam("u_item", $u_item);
			$stmt->execute();

			return $this->responseSuccess();
		} catch (PDOException $ex) {
			return $this->responseError($ex);
		}
	}

	// record conversation 

	public function record_confirm($eventID, $email, $q_status)
	{
		try {
			$stmt = $this->dblocal->prepare("INSERT INTO qube_confirm(eventID, email, q_status) VALUES(:eventID, :email, :q_status) ");

			$stmt->bindParam("eventID", $eventID);
			$stmt->bindParam("email", $email);
			$stmt->bindParam("q_status", $q_status);
			$stmt->execute();

			return $this->responseSuccess();
		} catch (PDOException $ex) {
			return $this->responseError($ex);
		}
	}

	// bring 
	public function record_to_bring($eventID, $d_dates, $email, $q_bring)
	{
		try {
			$stmt = $this->dblocal->prepare("INSERT INTO qube_bring(eventID, q_date, email, u_bring) VALUES(:eventID, :d_dates, :email, :q_bring) ");

			$stmt->bindParam("eventID", $eventID);
			$stmt->bindParam("d_dates", $d_dates);
			$stmt->bindParam("email", $email);
			$stmt->bindParam("q_bring", $q_bring);
			$stmt->execute();

			return $this->responseSuccess();
		} catch (PDOException $ex) {
			return $this->responseError($ex);
		}
	}
}
