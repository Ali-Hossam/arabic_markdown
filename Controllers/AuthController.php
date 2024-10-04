<?php
require_once base_path("Core/Auth.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class AuthController
{
  private $userModel;
  public function __construct($model)
  {
    $this->userModel = $model;
  }

  public function register()
  {
    // Validate input data
    $email = $_POST['email'] ?? '';
    $username = $_POST['username'] ?? '';
    $password1 = $_POST['password'] ?? '';
    $password2 = $_POST['confirm_password'] ?? '';

    if (!Auth::email($email)) {
      ErrorsManager::add("register", "Email is required");
      return false;
    }

    if (!Auth::password($password1)) {
      ErrorsManager::add("register", "Password must have special characters");
      return false;
    }

    if ($password1 !== $password2) {
      ErrorsManager::add("register", "Passwords are not the same");
      return false;
    }

    $this->userModel->addUser($username, $password1, $email);
    return true;
  }

  public function login()
  {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!$this->userModel->validateUser($email, $password)) {
      ErrorsManager::add("login", "Email or Password is incorrect");
      return false;
    }

    // Set session (to-do)
    return $this->userModel->findUserIdByEmail($email);
  }

  public function forgetPassword()
  {
    $email = $_POST['email'] ?? '';

    if (!$email) return false;

    if (!$this->userModel->getUserByEmail($email)) {
      ErrorsManager::add("forgetPassword", "The Given Email doesn't have an accout");
      return false;
    }

    $token = bin2hex(random_bytes(50));
    $this->userModel->storeResetToken($email, $token);

    // Send email with reset link
    $this->sendPasswordResetEmail($email, $token);
    return true;
  }

  public function sendPasswordResetEmail($to, $token)
  {
    $mail = new PHPMailer(true);

    try {
      //Server settings
      $mail->isSMTP();
      $mail->Host       = 'smtp.gmail.com'; // Set the SMTP server to send through
      $mail->SMTPAuth   = true; // Enable SMTP authentication
      $mail->Username   = 'johnantoy232@gmail.com'; // Your Gmail address
      $mail->Password   = ''; // Your Gmail password or App Password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable TLS encryption
      $mail->Port       = 465; // TCP port to connect to
      $mail->SMTPDebug = 2; // Enable verbose debug output

      //Recipients
      $mail->setFrom('noreply@yourwebsite.com', 'Your Website');
      $mail->addAddress($to); // Add a recipient

      // Content
      $mail->isHTML(true); // Set email format to HTML
      $mail->Subject = 'Password Reset Request';
      $mail->Body    = "
      <html>
      <head>
        <title>Password Reset</title>
      </head>
      <body>
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href='http://localhost:8001/reset_password.php?token=$token'>Reset Password</a>
      </body>
      </html>
      ";

      $mail->send();
      echo 'Password reset email has been sent.';
    } catch (Exception $e) {
      echo "Password reset email could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
  }
}
