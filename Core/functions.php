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

function view($path, $attributes=[])
{
  extract($attributes);
  require base_path("views/$path");
}

function redirectTo($path)
{
  $path = base_path($path);
  header("Location: $path");
  exit;
}