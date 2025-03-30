<?php
$_db_host = $_SERVER['DB_HOST'];
$_db_name = $_SERVER['DB_NAME'];
$_db_user = $_SERVER['DB_USER'];
$_db_pass = $_SERVER['DB_PASS'];

$db = new mysqli($_db_host, $_db_user, $_db_pass, $_db_name);

if ($db->connect_errno > 0) {
	die('Unable to connect to database [' . $db->connect_error . ']');
}

class db_letsqube
{
	public $dblocal;

	public function __construct() {}

	public function initDBO()
	{
		$_db_host = $_SERVER['DB_HOST'];
		$_db_name = $_SERVER['DB_NAME'];
		$_db_user = $_SERVER['DB_USER'];
		$_db_pass = $_SERVER['DB_PASS'];

		$this->dblocal = new PDO("mysql:host=$_db_host;dbname=$_db_name;charset=latin1", "$_db_user", "$_db_pass", array(PDO::ATTR_PERSISTENT => true));
		$this->dblocal->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
}
