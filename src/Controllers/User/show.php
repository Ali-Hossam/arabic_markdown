<?php
require_once base_path("Controllers/User.php");
use \Core\Session;

$user = new User();
$user::setId(Session::get('user_id'));

view("edit.view.php", [
  "user" => $user
]);