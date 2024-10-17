<?php
use Core\Session;
use Core\Cookies;

$userId = Cookies::get('user_id');

if ($userId) {
  Session::put('user_id', $userId);
  load_file('Controllers/User/show.php');
}

view("edit.view.php", ["user" => null]);
exit;
