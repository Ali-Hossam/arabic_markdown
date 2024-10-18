import { editor } from "../shared.js";

// Remove styling from pasted text
editor.addEventListener("paste", (e) => {
  e.preventDefault();

  // Get pasted data as plain text
  let plainText = (e.clipboardData || window.clipboardData).getData("text/plain");

  // Split the plain text into lines and wrap each line in a div
  let lines = plainText.split('\n').map(line => `<div>${line}</div>`).join('');

  // Insert the formatted lines into the editor
  document.execCommand("insertHTML", false, lines);
});
