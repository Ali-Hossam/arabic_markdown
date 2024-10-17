<?php
echo "POTATAO";
require base_path("Controllers/User.php");
require_once base_path("Core/Session.php");

$data = getJsonData();

if (isset($data['title']) && isset($data['doc'])) {
  $noteTitle = $data['title'];
  $doc = $data['doc'];

  $user = new User();
  $user->addDoc($doc, $noteTitle);
}
