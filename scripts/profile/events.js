import {
  picSubMenu,
  docSubMenu,
  subMenus,
  docMenuScrollbtns,
  userDocs,
} from "./shared.js";
import { updateAvatar } from "../api.js";

export function initProfileMenuEvents() {
  // Toggle sub-menus with click
  picSubMenu.addEventListener("click", (e) => {
    picSubMenu.querySelector("ul").classList.toggle("max-height200");
    picSubMenu.querySelector(".dropdown-icon").classList.toggle("rotate90");
  });

  docSubMenu.addEventListener("click", (e) => {
    docSubMenu.querySelector("ul").classList.toggle("max-height36vh");
    docSubMenu.querySelector(".dropdown-icon").classList.toggle("rotate90");
  });

  // Close submenu if clicking outside
  document.addEventListener("click", (e) => {
    subMenus.forEach((subMenu) => {
      if (!subMenu.contains(e.target)) {
        subMenu
          .querySelector("ul")
          .classList.remove("max-height200", "max-height36vh");
        subMenu.querySelector(".dropdown-icon").classList.remove("rotate90");
      }
    });
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

  if (docMenuScrollbtns.length) {
    const [upScrollBtn, downScrollBtn] = docMenuScrollbtns;

    // For desktop (hover) - Down button
    downScrollBtn.addEventListener("mouseenter", () =>
      startScrolling(userDocs, false)
    );
    downScrollBtn.addEventListener("mouseleave", stopScrolling);

    // For touch devices - Down button
    downScrollBtn.addEventListener("touchstart", () => {
      startScrolling(userDocs, false);
    });
    downScrollBtn.addEventListener("touchend", stopScrolling);

    // For desktop (hover) - Up button
    upScrollBtn.addEventListener("mouseenter", () =>
      startScrolling(userDocs, true)
    );
    upScrollBtn.addEventListener("mouseleave", stopScrolling);

    // For touch devices - Up button
    upScrollBtn.addEventListener("touchstart", () => {
      startScrolling(userDocs, true);
    });
    upScrollBtn.addEventListener("touchend", stopScrolling);
  }

  // Change profile picutre
  const profilePics = picSubMenu.querySelector("ul").querySelectorAll("li");
  const currentAvatar = document.querySelectorAll(".current-avatar");
  profilePics.forEach((profilePic) => {
    profilePic.addEventListener("click", (e) => {
      let avatar = profilePic.querySelector("img");
      currentAvatar.forEach((element) => (element.src = avatar.src));

      updateAvatar(avatar.alt)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });
}
