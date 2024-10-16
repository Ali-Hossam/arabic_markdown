<?php
session_start();
function displayDirectoryTree($dir, $level = 0)
{
  // Open the directory
  if ($handle = opendir($dir)) {
    // Loop through the directory entries
    while (false !== ($entry = readdir($handle))) {
      // Skip the current and parent directory entries
      if ($entry == '.' || $entry == '..') {
        continue;
      }

      // Print the entry with indentation based on the level
      echo str_repeat('  ', $level) . "|-- " . $entry . PHP_EOL;

      // Recursively display the contents of directories
      if (is_dir($dir . '/' . $entry)) {
        displayDirectoryTree($dir . '/' . $entry, $level + 1);
      }
    }
    closedir($handle);
  }
}

// Specify the directory you want to start from
$startDir = __DIR__; // Current directory
displayDirectoryTree($startDir);
require __DIR__ . '/../Core/functions.php';

require base_path("routes.php");
require base_path("Core/ErrorsManager.php");
require base_path("Core/Database.php");
require base_path("Core/Cookies.php");

$router->resolve($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
