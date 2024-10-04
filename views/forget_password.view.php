<?php require("partials/head.php") ?>

<body class="register-page">
  <form action="/reset-password" method="POST" class="register-form">
    <img src="/assets/pen_icon_no_bkg.png" class="web_logo" width="140px">

    <?php if (isset($mailSent)) : ?>
      <div class="email-sent-container">
        <img src="/assets/verified_.svg" alt="verified" class="width80">
        <h3 class="margin8px">تم إرسال رابط إعادة تعيين كلمة السر على البريد الإلكتروني</h3>
      </div>


    <?php else: ?>
      <div class="form-group">
        <label for="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email" placeholder="Username@Email.com" required>
      </div>

      <button class="register-button">إرسال</button>
      <div class="register-options">
        <a href="/views/register.view.php">مستخدم جديد</a>
        <a href="/views/login.view.php">تسجيل الدخول</a>
      </div>

    <?php endif; ?>
  </form>
</body>


<?php require("partials/footer.php") ?>