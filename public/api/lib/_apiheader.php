<?php
require_once __DIR__ . '/../../../vendor/autoload.php';

// For cors
if ($_ENV["PHP_ENV"] == "dev") {
	$dotenv = Dotenv\Dotenv::createImmutable(__DIR__, '../../../.env');
	$dotenv->safeLoad();

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
	header('Content-Type: application/json');

	$method = $_SERVER['REQUEST_METHOD'];
	if ($method == "OPTIONS") {
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
		header("HTTP/1.1 200 OK");
		die();
	}	
}
