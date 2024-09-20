// Convert digits in the input text to arabic
editor.addEventListener("beforeinput", (event) => {
  if (event.data != null && event.data >= "0" && event.data <= "9") {
    event.preventDefault();
    document.execCommand("insertText", false, digitsToArabic(event.data));
  }
});
