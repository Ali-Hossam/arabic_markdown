// automatic scroll to bottom while pasting text
contentEditor.addEventListener("paste", () => {
  contentEditor.scrollTop = contentEditor.scrollHeight;
});

function syncScroll(event) {
  const scrollTop = event.target.scrollTop;

  // Update Lines numbers container scroll bar position
  linesNumbersContainer.scrollTop = scrollTop;

  // Update editor container scroll bar position
  // contentViewer.scrollTop = scrollTop;
}

contentEditor.addEventListener("scroll", (event) => {
  syncScroll(event);
});
