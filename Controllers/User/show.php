<?php
session_start();
require "../../Core/functions.php";
require base_path("Controllers/User.php");
require base_path("Core/Session.php");
require base_path("Core/Database.php");
use \Core\Session;

$user = new User();
$user::setId(Session::get('user_id'));
$notesTitles = $user->getNotesTitles();

view("edit.view.php", [
  "user" => $user
]);
