<?php
require("partials/head.php") ?>

<body class="register-page">
  <form action="" class="register-form">
    <img src="/assets/pen_icon_no_bkg.png" class="web_logo" width="140px">

    <div class="form-group">
      <label for="email">البريد الإلكتروني</label>
      <input type="email" id="email" name="username" placeholder="Username@Email.com" required>
    </div>

    <div class="form-group">
      <label for="password">كلمة السر</label>
      <input type="password" id="password" name="password" placeholder="**************">
    </div>

    <button class="register-button">تسجيل الدخول</button>
    <div class="register-options">
      <a href="/views/register.view.php">مستخدم جديد</a>
      <a href="">هل نسيت كلمة السر؟</a>
    </div>

  </form>
</body>


<?php require("partials/footer.php") ?>