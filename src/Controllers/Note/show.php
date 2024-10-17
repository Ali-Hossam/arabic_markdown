<?php
require base_path("Controllers/User.php");
require_once base_path("Core/Session.php");

if (isset($_GET['title'])) {
  $noteTitle = $_GET['title'];
  $user = new User();
  echo $user->getDoc($noteTitle);
}
