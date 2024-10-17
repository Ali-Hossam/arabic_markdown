<?php
view("partials/head.php", ["title" => "Login"]);
?>

<body class="register-page">
  <div class="register-form-container">
    <?php require("register/logo.php") ?>
    <form action="/login" method="POST" class="register-form">

      <div class="form-group">
        <label for="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email" placeholder="Username@Email.com" required>
      </div>

      <div class="form-group">
        <label for="password">كلمة السر</label>
        <div class="password-container">
          <input type="password" id="password" name="password" placeholder="**************" required>
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
    </form>
    <div class="register-options">
      <form action="/register" method="get">
        <button type="submit" class="link-button">مستخدم جديد</button>
      </form>
      <form action="/reset_password" method="get">
        <button type="submit" class="link-button">هل نسيت كلمة السر؟</button>
      </form>
    </div>
  </div>
  <script type="module">
    import {
      loadLib
    } from "/scripts/core/functions.js";

    loadLib("register/form.js");
  </script>
</body>


<?php view("partials/footer.php") ?>