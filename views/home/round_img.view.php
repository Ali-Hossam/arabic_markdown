<div class="img-container">

  <div class="grid-item top-bar">
    <div class="grid-item right"></div>

    <div class="grid-item left">
      <?php if (\Core\Cookies::has('user_id')): ?>
      <?php else: ?>
        <form action="/register" method="GET">
          <button id="register-button">التسجيل</button>
        </form>
      <?php endif; ?>
    </div>

  </div>

  <div class="grid-item bottom-bar">
    <p class="code-text">
      العلمُ صيدٌ والكتابةُ قيّدُهُ
    </p>
    <!-- <img src="assets/computer.jpg" class="slide-imgs" width=""/> -->
  </div>

</div>