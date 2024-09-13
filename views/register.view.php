<?php 
require("partials/head.php") ?>

<body class="register-page">
  <form action="" class="register-form">
    <img src="/assets/pen_icon_no_bkg.png" class="web_logo" width="140px">

    <div class="form-group">
      <label for="username">الإسم</label>
      <input type="text" id="username" name="username" placeholder="الإسم" required>
    </div>

    <div class="form-group">
      <label for="email">البريد الإلكتروني</label>
      <input type="email" id="email" name="username" placeholder="Username@Email.com" required>
    </div>
    
    <div class="form-group">
      <label for="password">كلمة السر</label>
      <input type="password" id="password" name="password" placeholder="**************">
    </div>
    
    <div class="form-group">
      <label for="confirm_password">كلمة السر مرة أخرى</label>
      <input type="password" id="confirm_password" name="confirm_password" placeholder="**************" required>
    </div>

    <button class="register-button">التسجيل</button>
    <div class="register-options">
      <a href="/views/login.view.php">تسجيل الدخول</a>
      <a href=""></a>
    </div>

  </form>
</body>


<?php require("partials/footer.php") ?>