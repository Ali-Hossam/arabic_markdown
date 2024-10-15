<?php

namespace Core;

class Cookies {
  public static function has($key) {
    return (bool) static::get($key);
  }

  public static function get($key) {
    return $_COOKIE[$key] ?? false;
  }

  public static function put($key, $value, $days) {
    setcookie($key, $value, time() + ($days * 24 * 60 * 60), "/");
  }

  public static function clear($key) {
    static::put($key, "", -1);
  }
}

