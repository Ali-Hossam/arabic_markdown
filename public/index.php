<?php
session_start();

require "../Core/functions.php";
require base_path("routes.php");
require base_path("Core/ErrorsManager.php");
require base_path("Core/Database.php");
require base_path("Core/Cookies.php");

$router->resolve($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);