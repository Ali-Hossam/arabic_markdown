<?php require("partials/head.php") ?>

<body class="register-page">
  <form action="/register" method="POST" class="register-form">
    <img src="/assets/pen_icon_no_bkg.png" class="web_logo" width="140px">

    <div class="form-group">
      <label for="username">الإسم</label>
      <input type="text" id="username" name="username" placeholder="الإسم" required>
    </div>

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

    <div class="form-group">
      <label for="confirm_password">تأكيد كلمة السر</label>
      <div class="password-container">
        <input type="password" id="confirm_password" name="confirm_password" placeholder="**************" required>
        <img src="/assets/eye.svg" alt="show-password" class="show-password-icon">
      </div>
    </div>

    <p class="form-error-msg">
      <?php
      // Class doesn't exit if the page is loaded from <a href="link"> tag
      if (class_exists("ErrorsManager")) {
        if (ErrorsManager::has('register')) {
          echo implode("<br>", ErrorsManager::get('register'));
        }
      }
      ?>
    </p>

    <button class="register-button">التسجيل</button>
    <div class="register-options">
      <a href="/views/login.view.php">تسجيل الدخول</a>
      <a href=""></a>
    </div>
  </form>

  <script src="/scripts/Core/functions.js"></script>
  <script>
    loadLib("register_page/form.js");
  </script>

</body>


<?php require("partials/footer.php") ?>