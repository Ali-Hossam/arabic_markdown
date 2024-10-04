<?php
$db = new MongoDatabase();
$userModel = new UserModel($db);
$authController = new AuthController($userModel);

// TODO - Forget Password Email
// $authController->forgetPassword();

$mailSent = true;
view("forget_password.view.php", [
  "mailSent" => $mailSent
]);
