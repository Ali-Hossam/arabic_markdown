// Toggle dropdown list with click
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    // Toggle only if the pressed item does not have a sub-menu
    if (!e.target.parentElement.classList.contains("sub-menu")) {
      dropdown.querySelector(".dropdown-menu").classList.toggle("open");
      dropdown.classList.toggle("hoverBkg");

      // Profile dropdown menu doesn't have neither a tooltip nor dropdown icon
      if (dropdown.querySelector(".tooltip")) {
        dropdown.querySelector(".tooltip").classList.toggle("open");
        dropdown.querySelector(".dropdown-icon").classList.toggle("rotate180");
      }
    }
  });
});

// Close dropdown if clicking outside
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.querySelector(".dropdown-menu").classList.remove("open");
      dropdown.classList.remove("hoverBkg");
      // Profile dropdown menu doesn't have neither a tooltip nor dropdown icon

      if (dropdown.querySelector(".tooltip")) {
        dropdown.querySelector(".tooltip").classList.remove("open");
        dropdown.querySelector(".dropdown-icon").classList.remove("rotate180");
      }
    }

    subMenus.forEach((subMenu) => {
      if (!subMenu.contains(e.target)) {
        subMenu
          .querySelector("ul")
          .classList.remove("max-height200", "max-height36vh");
        subMenu.querySelector(".dropdown-icon").classList.remove("rotate90");
      }
    });
  });
});

// Toggle sub-menus with click
picSubMenu.addEventListener("click", (e) => {
  picSubMenu.querySelector("ul").classList.toggle("max-height200");
  picSubMenu.querySelector(".dropdown-icon").classList.toggle("rotate90");
});

docSubMenu.addEventListener("click", (e) => {
  docSubMenu.querySelector("ul").classList.toggle("max-height36vh");
  docSubMenu.querySelector(".dropdown-icon").classList.toggle("rotate90");
});

// Scrolling button in document menu
let scrollInterval;

function startScrolling(element, isUp) {
  scrollInterval = setInterval(() => {
    element.scrollBy(0, isUp ? -1 : 1); // Scroll up or down
  }, 10);
}

function stopScrolling() {
  clearInterval(scrollInterval);
}

if (docMenuScrollbtns) {
  const [upScrollBtn, downScrollBtn] = docMenuScrollbtns;

  // For desktop (hover) - Down button
  downScrollBtn.addEventListener("mouseenter", () =>
    startScrolling(downScrollBtn.parentElement, false)
  );
  downScrollBtn.addEventListener("mouseleave", stopScrolling);

  // For touch devices - Down button
  downScrollBtn.addEventListener("touchstart", (event) => {
    startScrolling(downScrollBtn.parentElement, false);
  });
  downScrollBtn.addEventListener("touchend", stopScrolling);

  // For desktop (hover) - Up button
  upScrollBtn.addEventListener("mouseenter", () =>
    startScrolling(upScrollBtn.parentElement, true)
  );
  upScrollBtn.addEventListener("mouseleave", stopScrolling);

  // For touch devices - Up button
  upScrollBtn.addEventListener("touchstart", (event) => {
    startScrolling(upScrollBtn.parentElement, true);
  });
  upScrollBtn.addEventListener("touchend", stopScrolling);
}

// Change profile picutre
const profilePics = picSubMenu.querySelector("ul").querySelectorAll("li");
const profileIconElement = dropdowns[dropdowns.length - 1];

profilePics.forEach((profilePic) => {
  profilePic.addEventListener("click", (e) => {
    profileIconElement.querySelector("img").src = e.target.src;
  });
});
