<?php
require base_path("Controllers/User.php");

User::setId(null);
\Core\Session::flush();
\Core\Cookies::clear("user_id");

view("edit.view.php", ['user' => null]);