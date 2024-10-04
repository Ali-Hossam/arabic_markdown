<?php
require("partials/head.php") ?>

<body class="register-page">
  <form action="/login" method="POST" class="register-form">
    <img src="/assets/pen_icon_no_bkg.png" class="web_logo" width="140px">

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
      if (class_exists("ErrorsManager")) {
        if (ErrorsManager::has('login')) {
          echo implode("<br>", ErrorsManager::get('login'));
        }
      }
      ?>
    </p>

    <button class="register-button">تسجيل الدخول</button>
    <div class="register-options">
      <a href="/views/register.view.php">مستخدم جديد</a>
      <a href="/views/forget_password.view.php">هل نسيت كلمة السر؟</a>
    </div>

  </form>
  <script src="/scripts/Core/functions.js"></script>
  <script>
    loadLib("register_page/form.js");
  </script>
</body>


<?php require("partials/footer.php") ?>