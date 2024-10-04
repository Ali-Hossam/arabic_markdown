<?php

class ErrorsManager
{
  private static $errors = []; // 2d array [[errorLocation] => [error1, error2]]

  static public function add($key, $value)
  {
    if (self::has($key)) {
      self::$errors[$key][] = $value;
    } else {
      self::$errors[$key] = is_array($value) ? $value : [$value];
    }
  }
  
  static public function get($key)
  {
    return self::$errors[$key] ?? [];
  }

  static public function has($key)
  {
    return isset(self::$errors[$key]);
  }

  static public function remove($key)
  {
    if (self::has($key)) {
      unset(self::$errors[$key]);
    }
  }

  static public function clearAll()
  {
    self::$errors = [];
  }
}
