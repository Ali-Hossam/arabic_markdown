<?php
require base_path("Controllers/User.php");
require base_path("Core/Session.php");

if (isset($_GET['title'])) {
  $noteTitle = $_GET['title'];
  $user = new User();
  echo $user->getNote($noteTitle);
}
