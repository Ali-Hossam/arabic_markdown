<?php
session_start();
function displayFirstLevelDirectories($dir) {
  // Open the directory
  if ($handle = opendir($dir)) {
      // Loop through the directory entries
      while (false !== ($entry = readdir($handle))) {
          // Skip the current and parent directory entries
          if ($entry == '.' || $entry == '..') {
              continue;
          }

          // Check if the entry is a directory
          if (is_dir($dir . '/' . $entry)) {
              // Print the directory name
              echo $entry . PHP_EOL;
          }
      }
      closedir($handle);
  }
}

// Specify the directory you want to start from (parent directory)
$startDir = __DIR__ . '/'; // Start from the parent directory
displayFirstLevelDirectories($startDir);
require __DIR__ . '/../Core/functions.php';

require base_path("routes.php");
require base_path("Core/ErrorsManager.php");
require base_path("Core/Database.php");
require base_path("Core/Cookies.php");

$router->resolve($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
