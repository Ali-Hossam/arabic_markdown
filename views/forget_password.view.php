<?php
$title = "Reset Password";
require("partials/head.php") 
?>

<body class="register-page">
  <form action="/reset-password" method="POST" class="register-form">
    <?php require("register/logo.php") ?>

    <?php if (isset($mailSent)) : ?>
      <div class="email-sent-container">
        <lottie-player src="https://lottie.host/a9635633-be5e-43e7-b35d-8f249cfc9eb1/wjQR4DEJCv.json"
          background="##FFFFFF" speed="0.8"
          style="width: 200px;" loop autoplay mode="normal"></lottie-player>
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

  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</body>


<?php require("partials/footer.php") ?>