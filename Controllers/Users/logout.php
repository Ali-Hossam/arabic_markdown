<?php
require base_path("Controllers/User.php");
require base_path("Core/Session.php");

User::setId(null);
\Core\Session::flush();
\Core\Cookies::clear("user_id");

view("edit.view.php");