<?php
require base_path("Controllers/User.php");
require base_path("Core/Session.php");

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data['name'])) {
  $avatarName = $data['name'];
  $user = new User();

  $user->setAvatar($avatarName);

  // Send a success response
  echo json_encode([
    "success" => true,
    "message" => "Avatar updated successfully.",
    "avatarName" => $avatarName // Optionally include the updated name
  ]);
} else {
  // Send an error response if 'name' is not provided
  echo json_encode([
    "success" => false,
    "message" => "Avatar name not provided."
  ]);
}
