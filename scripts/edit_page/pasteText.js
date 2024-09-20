// Remove styling from pasted text
editor.addEventListener("paste", (e) => {
  e.preventDefault();

  // Get pasted data as plain text
  let plainText = (e.clipboardData || window.clipboardData).getData(
    "text/plain"
  );

  document.execCommand("insertText", false, plainText);

  // Loop over the html and add </div> <div> after each br
  e.target.innerHTML = e.target.innerHTML.replace(/<br>/g, "</div><br><div>");
});
