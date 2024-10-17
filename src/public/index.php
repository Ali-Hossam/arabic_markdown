<?php
session_start();
var_dump(getenv(MONGO_URL));
echo "<br>";
dd($_SERVER);
require __DIR__ . '/../Core/functions.php';

require base_path("routes.php");
require base_path("Core/ErrorsManager.php");
require base_path("Core/Database.php");
require base_path("Core/Cookies.php");
require base_path("Core/Session.php");

$router->resolve($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
