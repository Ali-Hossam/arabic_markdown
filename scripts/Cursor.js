class Cursor {
  static moveToLineEnd(element) {
    element.focus();
    const range = document.createRange();
    range.selectNodeContents(element);

    // Collapse the range to the end to place the cursor at the end
    range.collapse(false);

    // // Insert a zero-width space at the cursor position to avoid weird line break behavior
    // const zeroWidthSpace = document.createTextNode("\u200B"); // Zero-width space
    // range.insertNode(zeroWidthSpace);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  static moveVertical(element, isStart) {
    // Moves to the start or end of an element
    const newDiv = createDivElement();

    if (isStart) {
      element.insertBefore(newDiv, element.firstChild);
    } else {
      element.appendChild(newDiv);
    }

    this.insertInto(newDiv);
  }

  static insertInto(element) {
    const selection = window.getSelection();
    const range = selection.rangeCount
      ? selection.getRangeAt(0)
      : document.createRange();

    range.setStart(element, 0);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
  }
}
