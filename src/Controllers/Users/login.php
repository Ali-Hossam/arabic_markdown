<?php
require base_path("Controllers/AuthController.php");
require_once base_path("Core/Cookies.php");

use Core\Session;
use Core\Cookies;

$authController = new AuthController();

$userId = $authController->login();

if ($userId) {
  load_file("Controllers/User/show.php");
}

view("login.view.php");
exit;
