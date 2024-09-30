// Toggle dropdown list with click
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.querySelector(".dropdown-menu").classList.toggle("open");
    dropdown.querySelector(".tooltip").classList.toggle("open");
    dropdown.querySelector(".dropdown-icon").classList.toggle("rotate180");
    dropdown.classList.toggle("hoverBkg");
  });
});

// Close dropdown if clicking outside
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.querySelector(".dropdown-menu").classList.remove("open");
      dropdown.querySelector(".tooltip").classList.remove("open");
      dropdown.querySelector(".dropdown-icon").classList.remove("rotate180");
      dropdown.classList.remove("hoverBkg");
    }
  });
});

