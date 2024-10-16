<?php
function dd($var)
{
  echo "<pre>";
  var_dump($var);
  echo "</pre>";
}

function base_path($path)
{
  return __DIR__ . "/../$path";
}

function view($path, $attributes = [])
{
  extract($attributes);
  require base_path("views/$path");
}

function redirectTo($path, $attributes = [])
{
  // Build a query string from the attributes array
  if (!empty($attributes)) {
    $queryString = http_build_query($attributes);
    $path .= '?' . $queryString;
  }
  header("Location: $path");
  exit;
}

function getJsonData()
{
  // Get raw input data
  $rawData = file_get_contents("php://input");
  $data = json_decode($rawData, true);

  if ($data === null) {
    die("Error decoding JSON data: " . json_last_error_msg());
  }

  return $data;
}

function getCookie($key) {
  return $_COOKIE[$key] ?? null;
}