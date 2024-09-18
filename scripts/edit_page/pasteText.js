// Remove styling from pasted text
contentEditor.addEventListener("paste", (e) => {
  e.preventDefault();

  let pastedData = e.clipboardData.getData("text/plain").trim();
  let paragraphs = pastedData.split(/\n/);

  // Create a div for each paragraph
  paragraphs.forEach((paragraph) => {
    const paragraphDiv = document.createElement("div");

    // If there is a new line in the text it appears as empty string
    if (!paragraph) {
      paragraphDiv.innerHTML = "<br>";
    } else {
      paragraphDiv.textContent = paragraph;
    }

    contentEditor.appendChild(paragraphDiv);
  });

  Cursor.moveVertical(contentEditor, false);
  updateLineNumbers();
  highlightLine();
});