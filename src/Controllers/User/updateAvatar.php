<?php
require base_path("Controllers/User.php");
require_once base_path("Core/Session.php");

$data = getJsonData();

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
