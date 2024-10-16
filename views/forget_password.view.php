<?php
view("partials/head.php", ["title" => "Reset Password"]);
?>

<body class="register-page">
  <div class="register-form-container">
    <?php require("register/logo.php") ?>

    <form action="/reset_password" method="POST" class="register-form">

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
      <?php endif; ?>
    </form>

    <div class="register-options">
      <form action="/register" method="get">
        <button type="submit" class="link-button">مستخدم جديد</button>
      </form>

      <form action="/login" method="get">
        <button type="submit" class="link-button">تسجيل الدخول</button>
      </form>
    </div>


  </div>


  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</body>


<?php require("partials/footer.php") ?>