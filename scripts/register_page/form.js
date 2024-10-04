const passwordContainers = document.querySelectorAll(".password-container");

passwordContainers.forEach((passwordContainer) => {
  const input = passwordContainer.querySelector("input");
  const showPassButton = passwordContainer.querySelector(".show-password-icon");

  showPassButton.addEventListener("click", () => {
    if (input.getAttribute("type") === "password")
    {
      input.setAttribute("type", "text");
      showPassButton.style.backgroundColor = "gray";
    } else {
      input.setAttribute("type", "password");
      showPassButton.style.backgroundColor = "";
    }
  });
});
