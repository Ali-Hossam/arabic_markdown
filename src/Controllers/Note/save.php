<?php
require base_path("Controllers/User.php");
require base_path("Core/Session.php");

$data = getJsonData();

if (isset($data['title']) && isset($data['doc'])) {
  $noteTitle = $data['title'];
  $doc = $data['doc'];

  $user = new User();
  echo $user->addDoc($doc, $noteTitle);
}
