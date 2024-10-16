<?php
namespace Core;
class Session
{
  public static function has($key)
  {
    return (bool) static::get($key);
  }

  public static function get($key)
  {
    return $_SESSION[$key] ?? false;
  }

  public static function put($key, $value)
  {
    $_SESSION[$key] = $value;
  }

  public static function flush() {
    $_SESSION = [];
  }
}
