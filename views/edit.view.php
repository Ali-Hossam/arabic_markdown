<?php require("partials/head.php") ?>

<body class="edit-page">
  <?php require("edit_page/edit_bar.view.php") ?>

  <div class="edit-page-container">
    <div class="flex-row editor-container">
      <ul class="lines-numbers-container"></ul>
      <div class="editor editor-area" contenteditable="true"></div>
    </div>

    <div class="content-viewer editor-area border" id="print"></div>
  </div>

  <div id="filenamePopover" popover>
    <input type="text" placeholder="اسم الملف">
    <button class="edit-bar-button submit">حفظ</button>
  </div>
  

  <!-- Include Marked.js & pdf2html from CDN -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="/scripts/Core/functions.js"></script>
  <script>
    loadLib("Core/Caret.js");
    loadLib("edit_page/utils/Theme.js")
    loadLib("edit_page/shared.js");
    loadLib("edit_page/toolbar/dropdown/init.js");
    loadLib("edit_page/toolbar/dropdown/events.js");
    loadLib("edit_page/toolbar/iconsEvents.js");
    loadLib("edit_page/utils/filterInput.js")
    loadLib("edit_page/utils/highlightActiveLine.js")
    loadLib("edit_page/utils/lineNumbers.js")
    loadLib("edit_page/utils/parseMd.js")
    loadLib("edit_page/utils/pasteText.js")
    loadLib("edit_page/utils/syncScroll.js")
    loadLib("edit_page/editPage.js")
  </script>

</body>

<?php require("partials/footer.php") ?>