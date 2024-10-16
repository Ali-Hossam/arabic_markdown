<li class="dropdown user-profile">
  <?php echo '<img src="' . $user->getAvatar() . '" class="profile-pic current-avatar">'; ?>
  <ul class="dropdown-menu right">
    <div class="profile-data flex-col flex-center border-bottom">
      <p><?= $user->getEmail() ?></p>
      <?php echo '<img src="' . $user->getAvatar() . '" class="profile-pic current-avatar width80 height80 margin8px">'; ?>
      <h3>مرحباً <?= $user->getName() ?>!</h3>
    </div>

    <li class="sub-menu">
      <p class="flex">
        <span class="dropdown-icon">&#9658;</span>
        <object class="svg-object disable-events" data="/assets/profile.svg" alt="mode" type="image/svg+xml"></object>
        <span class="disable-events">الصورة الشخصية</span>
      </p>
      <ul class="grid"></ul>
    </li>

    <li class="sub-menu">
      <p class="flex">
        <span class="dropdown-icon">&#9658;</span>
        <object class="svg-object disable-events" data="/assets/files.svg" alt="mode" type="image/svg+xml"></object>
        <span class="disable-events">ملفاتي</span>
      </p>

      <ul class="flex-col">
        <?php
        echo count($userNotesList) > 6 ?
          "<button class='scroll-but up-scroll'>&uarr;</button>" :
          ""; ?>

        <ul class="flex-col" id="user-docs">
          <?php
          foreach ($userNotesList as $noteTitle) {
            echo "
            <li class='space-between note'>
              <span>$noteTitle</span>
              <div class='flex rmv-note-btn-container'>
                <object class='svg-object rmv-note-btn' data='/assets/delete.svg' alt='remove'></object>
              </div>
            </li>";
          }
          ?>
        </ul>

        <?php
        echo count($userNotesList) > 6 ?
          "<button class='scroll-but down-scroll'>&darr;</button>" :
          "";
        ?>
      </ul>
    </li>

    <form action="/signout" method="POST" class="border-top">
      <button class="menu-button">
        <object class="svg-object disable-events" data="/assets/exit.svg" alt="mode" type="image/svg+xml"></object>
        الخروج
      </button>
    </form>

  </ul>
</li>