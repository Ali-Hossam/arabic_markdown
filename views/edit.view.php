<?php require("partials/head.php") ?>

<body class="register-page">
  <?php require("edit_page/edit_bar.view.php") ?>

  <div class="edit-page-container">
    <ul class="lines-numbers-container"></ul>

    <div class="content-editor editor-area" contenteditable="true">
    </div>

    <div class="content-viewer editor-area">

    </div>

  </div>
  <script src="/scripts/edit_page/functions.js"></script>
  <script src="/scripts/Cursor.js"></script>
  <script src="/scripts/edit_page/lineNumbers.js"></script>
  <script src="/scripts/edit_page/highlightActiveLine.js"></script>
  <script src="/scripts/edit_page/pasteText.js"></script>
  <script src="/scripts/edit_page/syncScroll.js"></script>
  <script src="/scripts/edit_page/editPage.js"></script>

</body>


<?php require("partials/footer.php") ?>