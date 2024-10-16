import { editor } from "../shared.js";
import { linesNumbersContainer } from "../shared.js";

// automatic scroll to bottom while pasting text
editor.addEventListener("paste", () => {
  editor.scrollTop = editor.scrollHeight;
});

function syncScroll(event) {
  const scrollTop = event.target.scrollTop;

  // Update Lines numbers container scroll bar position
  linesNumbersContainer.scrollTop = scrollTop;

  // Update editor container scroll bar position
  // previewer.scrollTop = scrollTop;
}

editor.addEventListener("scroll", (event) => {
  syncScroll(event);
});
