<li class="dropdown user-profile">
  <img src="/assets/profiles/users-1.svg" class="profile-pic">
  <ul class="dropdown-menu right">
    <li class="sub-menu">
      <p class="flex">
        <span class="dropdown-icon">&#9658;</span>
        <object class="svg-object disable-events" data="/assets/profile.svg" alt="mode" type="image/svg+xml"></object>
        الصورة الشخصية
      </p>
      <ul class="grid"></ul>
    </li>
    <li class="sub-menu">
      <p class="flex">
        <span class="dropdown-icon">&#9658;</span>
        <object class="svg-object disable-events" data="/assets/files.svg" alt="mode" type="image/svg+xml"></object>
        ملفاتي
      </p>
      <ul class="flex-col" id="user-doc">
        <?php
        echo count($userNotesList) > 10 ?
          "<button class='scroll-but up-scroll'>&uarr;</button>" :
          "";

        foreach ($userNotesList as $note) {
          echo "<li class='space-between'>
                      $note
                      <div class='flex rmv-note-btn-container'>
                      <object class='svg-object rmv-note-btn' data='/assets/delete.svg' alt='remove'></object>
                      </div>
                    </li>";
        }

        echo count($userNotesList) > 10 ?
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