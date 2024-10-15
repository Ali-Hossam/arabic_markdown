<?php
use Core\Session;
use Core\Cookies;

$userId = Cookies::get('user_id');

if ($userId) {
  redirectTo("/Controllers/User/show.php", [
    'id' => $userId
  ]);
}

view("edit.view.php");
exit;
