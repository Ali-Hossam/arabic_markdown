<div class="edit-bar border">
  <div class="edit-bar-icons-container">
    <a href="http://localhost:8000" class="home-link">
      <div class="website-logo">
        <img src="/assets/pen_icon_no_bkg.png" alt="website-icon" />
        <h1 class="logo">محبرة</h1>
      </div>
    </a>
    <?php if (class_exists("\Core\Session") && \Core\Session::has('user_id')): ?>
      <ul class="edit-bar-icons-subcontainer save-container margin16px">
        <div id="filename-container">
          <input type="text" name="filename" id="filename-input" placeholder="ادخل اسم الملف . . .">
          <li class="list-element edit-bar-icon" id="save">
            <object class="svg-object disable-events" data="/assets/edit_page_icons/save.svg" alt="save" type="image/svg+xml"></object>
          </li>
        </div>
      </ul>
    <?php endif; ?>
  </div>

  <div class="edit-bar-icons-container">
    <ul class="edit-bar-icons-subcontainer border">
      <li class="list-element edit-bar-icon dropdown">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/font.svg" alt="Font type" type="image/svg+xml"></object>
        <span class="dropdown-icon">&#9660;</span>
        <span class="tooltip">نوع الخط</span>
        <ul class="dropdown-menu"></ul>
      </li>
      <li class="list-element edit-bar-icon dropdown">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/hash.svg" alt="Font size" type="image/svg+xml"></object>
        <span class="dropdown-icon">&#9660;</span>
        <span class="tooltip">حجم الخط</span>
        <ul class="dropdown-menu"></ul>
      </li>
    </ul>

    <ul class="edit-bar-icons-subcontainer border text-format-icons">
      <li class="list-element edit-bar-icon">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/bold.svg" alt="Bold" type="image/svg+xml"></object>
        <span class="tooltip">سميك</span>
      </li>
      <li class="list-element edit-bar-icon">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/italic.svg" alt="Italic" type="image/svg+xml"></object>
        <span class="tooltip">مائل</span>
      </li>
      <li class="list-element edit-bar-icon">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/through.svg" alt="Strikethrough" type="image/svg+xml"></object>
        <span class="tooltip">مشطوب</span>
      </li>
    </ul>

    <ul class="edit-bar-icons-subcontainer border lists-icons">
      <li class="list-element edit-bar-icon">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/list.svg" alt="List" type="image/svg+xml"></object>
        <span class="tooltip">قائمة</span>
      </li>
      <li class="list-element edit-bar-icon">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/numbered_list.svg" alt="Numbered List" type="image/svg+xml"></object>
        <span class="tooltip">قائمة مرقمة</span>
      </li>
      <li class="list-element edit-bar-icon">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/check_list.svg" alt="Check List" type="image/svg+xml"></object>
        <span class="tooltip">قائمة تحقق</span>
      </li>
    </ul>

    <ul class="edit-bar-icons-subcontainer border input-icons">
      <li class="list-element edit-bar-icon">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/image.svg" alt="Insert Image" type="image/svg+xml"></object>
        <span class="tooltip">صورة</span>
      </li>
      <li class="list-element edit-bar-icon">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/link.svg" alt="Add Link" type="image/svg+xml"></object>
        <span class="tooltip">رابط</span>
      </li>
    </ul>

    <ul class="edit-bar-icons-subcontainer border quotes-icons">
      <li class="list-element edit-bar-icon">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/quotes.svg" alt="Quotes" type="image/svg+xml"></object>
        <span class="tooltip">اقتباس</span>
      </li>
    </ul>
  </div>

  <ul class="register-icons-container">
    <ul class="edit-bar-icons-subcontainer border register-icons-container">
      <li class="list-element edit-bar-icon dropdown">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/colors.svg" alt="mode" type="image/svg+xml"></object>
        <span class="tooltip">نمط الألوان</span>
        <span class="dropdown-icon">&#9660;</span>
        <ul class="dropdown-menu colors-menu"></ul>
      </li>
      <li class="list-element edit-bar-icon export dropdown">
        <object class="svg-object disable-events" data="/assets/edit_page_icons/download.svg" type="image/svg+xml" alt="Export"></object>
        <span class="tooltip">تحميل</span>
        <span class="dropdown-icon">&#9660;</span>
        <ul class="dropdown-menu"></ul>
      </li>
    </ul>

    <?php if (class_exists("\Core\Session") && \Core\Session::has('user_id')): ?>
      <?php view("profile_menu.view.php", [
        "userNotesList" => $user->getDocsTitles(),
        "user" => $user
      ]) ?>
    <?php else: ?>
      <form action="/register" method="get">
        <button class="edit-bar-button">التسجيل</button>
      </form>
    <?php endif; ?>
  </ul>
</div>