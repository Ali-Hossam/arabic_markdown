<?php
require base_path("Controllers/AuthController.php");
require base_path("Core/Cookies.php");

use Core\Session;
use Core\Cookies;

$authController = new AuthController();

$userId = $authController->login();

if ($userId) {
  redirectTo("/Controllers/User/show.php", [
    'id' => $userId
  ]);
  
}

view("login.view.php");
exit;
