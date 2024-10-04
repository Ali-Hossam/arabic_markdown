<?php
class Auth
{

  static public function email($email)
  {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
  }

  static public function password($password)
  {
    return preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $password);
  }
}
