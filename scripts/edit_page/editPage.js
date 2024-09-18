// Add a div to write the content of the first line into instead of writing
// directly in the content editor element text.
function addFirstLine() {
  const div = createDivElement();
  contentEditor.appendChild(div);
  Cursor.setPosition(div);
}

addFirstLine();
highlightLine();

contentEditor.addEventListener("keydown", (e) => {
  if(contentEditor.childElementCount === 0) {
    addFirstLine();
  }
});

contentEditor.addEventListener("dragstart", (e) => {
  e.preventDefault();
})
