// Add a div to write the content of the first line into instead of writing
// directly in the content editor element text.
function addFirstLine() {
  const div = createDivElement();
  editor.appendChild(div);
  Caret.setPosition(div);
  highlightLine();
}

addFirstLine();

editor.addEventListener("keydown", (e) => {
  setTimeout(() => {
    if (editor.childElementCount === 0) {
      addFirstLine();
    }
  }, 1);
});

editor.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

// Update caret position with inputs to the editor
editor.addEventListener("input", () => {
  Caret.updatePosition();
});

editor.addEventListener("pointerup", () => {
  delayExec(Caret.updatePosition, 1);
});

