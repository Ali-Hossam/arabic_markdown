<?php
require base_path("Controllers/AuthController.php");
require base_path("Controllers/User.php");

$authController = new AuthController();
$userId = $authController->register();

if ($userId) {
  load_file("/Controllers/User/show.php");
}

view("register.view.php");
