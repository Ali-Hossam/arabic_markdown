class Cursor {
  static moveToLineEnd(element) {
    element.focus();
    const range = document.createRange();
    range.selectNodeContents(element);

    // Collapse the range to the end to place the cursor at the end
    range.collapse(false);

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

    this.setPosition(newDiv);
  }

  static setPosition(element, cursorPosition = 0) {
    const selection = window.getSelection();
    const range = document.createRange();

    // Ensure we are dealing with text nodes or proper element
    if (element.nodeType === Node.ELEMENT_NODE) {
      const textNode = element.firstChild; // Assume first child is a text node
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        range.setStart(
          textNode,
          Math.min(cursorPosition, textNode.textContent.length)
        );
      } else {
        // Handle case where the element might not have a text node
        range.selectNodeContents(element);
        range.collapse(true);
      }
    } else if (element.nodeType === Node.TEXT_NODE) {
      range.setStart(
        element,
        Math.min(cursorPosition, element.textContent.length)
      );
    } else {
      // Handle other cases or throw an error
      console.error("Element is not suitable for cursor positioning");
      return;
    }

    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
  }

  static getPosition() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const cursorPosition = range.startOffset;
    return cursorPosition;
  }
}
