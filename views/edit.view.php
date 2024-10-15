<?php
$title = "Edit";
require("partials/head.php")
?>

<body class="edit-page">
  <?php require("edit/edit_bar.view.php") ?>

  <div class="edit-page-container">
    <div class="flex-row editor-container">
      <ul class="lines-numbers-container"></ul>
      <div class="editor editor-area scrollbar" contenteditable="true"></div>
    </div>

    <div class="content-viewer editor-area border scrollbar"></div>
  </div>

  <div id="filenamePopover" popover>
    <div class="flex">
      <input type="text" placeholder="اسم الملف">
      <button class="edit-bar-button submit">حفظ</button>
    </div>
  </div>


  <!-- Include Marked.js & pdf2html from CDN -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="https://unpkg.com/dompurify@2/dist/purify.min.js"></script>

  <script type="module">
    import {
      loadLib
    } from "/scripts/core/functions.js";
    loadLib("edit/toolbar/dropdown/init.js");
    loadLib("edit/toolbar/dropdown/events.js");
    loadLib("edit/utils/filterInput.js")
    loadLib("edit/utils/highlightActiveLine.js")
    loadLib("edit/utils/lineNumbers.js")
    loadLib("edit/utils/parseMd.js")
    loadLib("edit/utils/pasteText.js")
    loadLib("edit/utils/syncScroll.js")
    loadLib("edit/editPage.js")
    loadLib("profile/deleteNote.js")
    loadLib("profile/showNote.js")
    loadLib("edit/toolbar/iconsEvents.js");
    loadLib("edit/toolbar/saveNote.js");
  </script>


</body>

<?php require("partials/footer.php") ?>