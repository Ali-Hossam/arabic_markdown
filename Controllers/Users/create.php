<?php

$db = new MongoDatabase();
$userModel = new UserModel($db);
$authController = new AuthController($userModel);

if ($authController->register()) {
  view("edit.view.php");
} else {
  view("register.view.php");
}
