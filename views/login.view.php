<?php
$title = "Login";
require("partials/head.php") 
?>

<body class="register-page">
  <form action="/login" method="POST" class="register-form">
    <?php require("register/logo.php") ?>

    <div class="form-group">
      <label for="email">البريد الإلكتروني</label>
      <input type="email" id="email" name="email" placeholder="Username@Email.com" required>
    </div>

    <div class="form-group">
      <label for="password">كلمة السر</label>
      <div class="password-container">
        <input type="password" id="password" name="password" placeholder="**************">
        <img src="/assets/eye.svg" alt="show-password" class="show-password-icon">
      </div>
    </div>

    <p class="form-error-msg">
      <?php
      // Class doesn't exit if the page is loaded from <a href="link"> tag
      try {
        if (class_exists("\Core\ErrorsManager")) {
          if (\Core\ErrorsManager::has('login')) {
            echo implode("<br>", \Core\ErrorsManager::get('login'));
          }
        }
      } catch (Exception $e) {
        echo "An error occurred: " . htmlspecialchars($e->getMessage());
      }
      ?>
    </p>

    <button class="register-button">تسجيل الدخول</button>
    <div class="register-options">
      <a href="/views/register.view.php">مستخدم جديد</a>
      <a href="/views/forget_password.view.php">هل نسيت كلمة السر؟</a>
    </div>

  </form>
  <script type="module">
    import {
      loadLib
    } from "/scripts/core/functions.js";

    loadLib("register/form.js");
  </script>
</body>


<?php require("partials/footer.php") ?>