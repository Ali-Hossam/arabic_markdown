<?php
require base_path("Core/Router.php");
use \Core\Router;

$router = new Router();
$router->get('/', 'views/home.view.php');
$router->get('/register', 'views/register.view.php');
$router->post('/register', 'Controllers/Users/create.php');


$router->get('/login', 'views/login.view.php');
$router->post('/login', 'Controllers/Users/login.php');

$router->post('/reset-password', 'Controllers/Users/resetPass.php');
$router->post('/signout', 'Controllers/Users/signout.php');

$router->delete('/note', 'Controllers/Note/delete.php');

$router->put('/avatar', 'Controllers/User/updateAvatar.php');

$router->get('/note', 'Controllers/Note/show.php');
