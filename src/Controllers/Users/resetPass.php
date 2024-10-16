<?php
require base_path("Controllers/AuthController.php");
$authController = new AuthController();

// TODO - Forget Password Email
// $authController->forgetPassword();

$mailSent = true;
view("forget_password.view.php", [
  "mailSent" => $mailSent
]);
