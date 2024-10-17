document.querySelectorAll(".home-redirect").forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "/";
  });
});
