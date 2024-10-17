<?php
view("partials/head.php", ["title" => "Mahbara"]);
?>

<body class="home">

  <?php view("home/nav_bar.view.php") ?>

  <div class="slides">
    <?php view("home/slide1.view.php") ?>
    <?php view("home/slide2.view.php") ?>
    <?php view("home/slide3.view.php") ?>
  </div>

  <footer style="margin-top:8px;">
    <div style="font-family: 'reem kufi'; font-size:150px;">
      <p>محبرة</p>
    </div>
  </footer>
</body>

<?php view("partials/footer.php") ?>