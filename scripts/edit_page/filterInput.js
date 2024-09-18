// Convert digits in the input text to arabic
contentEditor.addEventListener("input", (event) => {
  if (event.data != null && event.data >= "0" && event.data <= "9") {
    const editableDiv = event.target;
    const text = editableDiv.innerText;

    const cursorPosition = Cursor.getPosition();
    editableDiv.innerText = digitsToArabic(text);
    Cursor.setPosition(editableDiv, cursorPosition);
  }
});
