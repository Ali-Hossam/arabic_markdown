<?php
view("partials/head.php", ["title" => "Register"]);
?>

<body class="register-page">
  <div class="register-form-container">
    <?php require("register/logo.php") ?>

    <form action="/register" method="POST" class="register-form">
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
        if (class_exists("\Core\ErrorsManager")) {
          if (\Core\ErrorsManager::has('register')) {
            echo implode("<br>", \Core\ErrorsManager::get('register'));
          }
        }
        ?>
      </p>

      <button class="register-button">التسجيل</button>
    </form>

    <div class="register-options">
      <form action="/login" method="get">
        <button type="submit" class="link-button">تسجيل الدخول</button>
      </form>
      <a href=""></a>
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