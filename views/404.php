<?php
$title = "404";
require("partials/head.php")
?>

<body>

  <div class="flex-col height100">
    <?php require("views/home/nav_bar.view.php") ?>
    <div class="flex-center height100">

      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

      <dotlottie-player src="https://lottie.host/e41baaf8-d9e4-462b-94ec-9eff4d2a1b93/YmnQoEKIrt.json"
        background="transparent" speed="1"
        style="width: 700px;" loop autoplay>
      </dotlottie-player>
    </div>
  </div>
</body>

<?php require("partials/footer.php") ?>