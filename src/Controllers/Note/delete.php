<?php
require base_path("Controllers/User.php");
require_once base_path("Core/Session.php");

try {
    $data = getJsonData();

    // Get the note title
    if (!isset($data['title'])) {
        throw new Exception('Title is required.');
    }

    $noteTitle = $data['title'];

    // Create a new User instance and remove the document
    $user = new User();
    $user->removeDoc($noteTitle);
    echo "Note Removed";
} catch (Exception $e) {
    // Handle the error
    http_response_code(400); // Bad Request
    echo json_encode(['error' => $e->getMessage()]);
}
