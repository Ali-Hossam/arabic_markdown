const passwordContainers = document.querySelectorAll(".password-container");

passwordContainers.forEach((passwordContainer) => {
  const input = passwordContainer.querySelector("input");
  const showPassButton = passwordContainer.querySelector(".show-password-icon");

  showPassButton.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    showPassButton.style.backgroundColor = isPassword ? "gray" : "";
  });
});
