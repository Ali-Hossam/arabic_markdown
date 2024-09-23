let highlightDiv;

const rootStyles = getComputedStyle(root);
const cssLineHeight = parseInt(
  rootStyles.getPropertyValue("--line-height").trim()
);
const cssLinePadding = parseInt(
  rootStyles.getPropertyValue("--line-padding").trim()
);

function createHighlightDiv() {
  highlightDiv = document.createElement("div");
  highlightDiv.classList.add("highlight-line");
  document.body.appendChild(highlightDiv);
}

function highlightLine() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const currentNode = range.startContainer;

  const rect = range.getBoundingClientRect();
  const lineHeight = cssLineHeight + cssLinePadding;

  if (!highlightDiv) {
    createHighlightDiv();
  }

  const editorRect = editor.getBoundingClientRect();

  // The top offset for the highlighting box is the top offset of the
  // container or the top offset of the text if exists.
  let caretOffsetTop;
  if (!rect.top) {
    caretOffsetTop =
      currentNode.getBoundingClientRect().top + cssLinePadding / 2;
  } else {
    caretOffsetTop = rect.top + cssLinePadding;
    // console.log(range.endOffset); // USE THIS OFFSET TO SPECIFY WHICH LINE (FIREFOx)
  }

  // Set the highlight position based on the cursor's line
  highlightDiv.style.top = `${
    caretOffsetTop - cssLinePadding + window.scrollY
  }px`;
  highlightDiv.style.left = `${editorRect.left + window.scrollX}px`;
  highlightDiv.style.height = `${lineHeight}px`; // Match the height of the text line
  highlightDiv.style.width = `${editorRect.width}px`; // Full width of the editor
}

editor.addEventListener("keydown", () => {
  delayExec(highlightLine, 1);
  updateLineNumbers();
});

editor.addEventListener("pointerdown", () => {
  delayExec(highlightLine, 1);
});

window.addEventListener("resize", () => {
  delayExec(highlightLine, 1);
});

editor.addEventListener("scroll", () => {
  highlightLine();
});
