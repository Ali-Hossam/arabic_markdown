import { dropdowns, userProfile } from "../../shared.js";

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
  });
});
