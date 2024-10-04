<?php
$db = new MongoDatabase();
$userModel = new UserModel($db);
$authController = new AuthController($userModel);

$userId = $authController->login();
if (!$userId) {
  view("login.view.php");
  exit;
}

$userProfile = new UserProfileService($db);
$userProfile->setUserId($userId);
$userNotesList = $userProfile->getUserNotesList();

view("edit.view.php");
