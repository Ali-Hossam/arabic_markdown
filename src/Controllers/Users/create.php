<?php
require base_path("Controllers/AuthController.php");
require base_path("Controllers/User.php");
require base_path("Core/Cookies.php");

use \Core\Cookies;

$authController = new AuthController();
$userId = $authController->register();

if ($userId) {
  redirectTo("/Controllers/User/show.php", [
    'id' => $userId
  ]);
}

view("register.view.php");
exit;
