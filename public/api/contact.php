<?php
header("Access-Control-Allow-Origin: *");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['lname']) && empty($_POST['email']) && empty($_POST['message'])) {
	die();
}

if (!$_POST) {
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	die();
}

$name = $_POST['fname'] . ' ' . $_POST['lname'];
$subject = 'Visitor from Letsqube.com';
$to = "letsqube.contact@gmail.com";
$from = $_POST['email'];
$msg = 'Name: <strong>' . $name . '</strong><HR>' . $_POST['message'];
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <" . $from . ">";

mail($to, $subject, $msg, $headers);

http_response_code(200);
echo json_encode(["sent" => true, "message" => "We have received your Email!"]);
