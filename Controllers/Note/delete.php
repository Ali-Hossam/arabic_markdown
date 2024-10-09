<?php
// Get the raw input from the request
$input = file_get_contents("php://input");

// Decode the JSON input
$data = json_decode($input, true);
$noteTitle = $data['title'];

$user = new User();
echo $user->removeNote($noteTitle);
