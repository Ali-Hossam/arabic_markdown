let prevLineElement = null;
let activeElement = null;

function highlightLine() {
  const selection = window.getSelection();
  activeElement = selection.focusNode;

  // Active element is text node when the line isn't empty <div> some text </div>
  if (activeElement && activeElement.nodeType === Node.TEXT_NODE) {
    activeElement = activeElement.parentElement;
  }

  // Remove highlight from the previous line
  if (prevLineElement) {
    prevLineElement.classList.remove("highlighted-bkg");
  }

  if (activeElement) {
    activeElement.classList.add("highlighted-bkg");
    prevLineElement = activeElement;
  }
}

// function highlightLineNumber() {
//   const selection = window.getSelection();
//   activeElement = selection.focusNode;

//   // Get the index of the active element in it's parent childs
//   if (activeElement && activeElement.nodeType === Node.TEXT_NODE) {
//     activeElement = activeElement.parentElement;
//     const activeElementParent = activeElement.parentElement;
//     const elementIdx = Array.prototype.indexOf.call(
//       activeElementParent.children,
//       activeElement
//     );

//     // Get the corresponding line number
//     const linesNumbers = document.querySelectorAll(".lines-numbers-container .line-number");
//     const activeLineNumber = linesNumbers[elementIdx - 1];
//     activeLineNumber.classList.add("highlighted-number");
//   }
// }

contentEditor.addEventListener("keydown", () => {
  setTimeout(() => {
    highlightLine();
  }, 5);
  
  updateLineNumbers();
  // highlightLineNumber();
});

contentEditor.addEventListener("pointerdown", ()=> {
  setTimeout(() => {
    highlightLine();
  }, 1);});