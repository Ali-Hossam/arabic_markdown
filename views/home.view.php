<?php 
$title = "Mahbara";
require("views/partials/head.php") 
?>

<body class="home">

  <?php require("views/home/nav_bar.view.php") ?>

  <div class="slides">
    <?php require("views/home/slide1.view.php") ?>
    <?php require("views/home/slide2.view.php") ?>
    <?php require("views/home/slide3.view.php") ?>
  </div>

  <footer style="margin-top:8px;">
    <div style="font-family: 'reem kufi'; font-size:150px;">
      <p>محبرة</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="/scripts/home/slider.js"></script>

</body>

<?php require("views/partials/footer.php") ?>