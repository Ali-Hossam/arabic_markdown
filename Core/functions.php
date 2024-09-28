<?php
function dd($var) {
  echo "<pre>";
  var_dump($var);
  echo "</pre>";
}

function base_path($path)
{
  return __DIR__ . "/../$path";
}
