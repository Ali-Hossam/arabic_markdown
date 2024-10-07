<?php
require_once base_path("Core/Router.php");

$router = new Router();
$router->get('/', 'views/home.view.php');
$router->get('/register', 'views/register.view.php');
$router->post('/register', 'Controllers/Users/create.php');


$router->get('/login', 'views/login.view.php');
$router->post('/login', 'Controllers/Users/show.php');

$router->post('/reset-password', 'Controllers/Users/resetPass.php');
$router->post('/signout', 'Controllers/Users/signout.php');

$router->delete('/note/delete', 'Controllers/Note/delete.php');

$router->put('/updateAvatar', 'Controllers/user/updateAvatar.php');

$router->get('/note/get', 'Controllers/Note/show.php');
