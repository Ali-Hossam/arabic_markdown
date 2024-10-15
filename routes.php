<?php
require base_path("Core/Router.php");

use \Core\Router;

$router = new Router();
$router->get('/', 'views/home.view.php');

$router->get('/register', 'views/register.view.php');
$router->post('/register', 'Controllers/Users/create.php');
$router->post('/reset-password', 'Controllers/Users/resetPass.php');
$router->post('/signout', 'Controllers/Users/logout.php');

$router->get('/login', 'views/login.view.php');
$router->post('/login', 'Controllers/Users/login.php');

$router->get('/edit', 'Controllers/Edit/show.php');

$router->put('/avatar', 'Controllers/User/updateAvatar.php');

$router->get('/note', 'Controllers/Note/show.php');
$router->post('/note/save', 'Controllers/Note/save.php');
$router->post('/note/export', 'Controllers/Note/export.php');
$router->delete('/note', 'Controllers/Note/delete.php');
