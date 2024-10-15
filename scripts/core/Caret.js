import { createDivElement } from "./functions.js";

export class Caret {
  static currentElement = null;
  static offset = null;
  static range = null;

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

  static updatePosition() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      this.range = selection.getRangeAt(0);

      this.offset = this.range.startOffset;

      this.currentElement =
        this.range.startContainer.nodeType === Node.TEXT_NODE
          ? this.range.startContainer.parentNode
          : this.range.startContainer;
    }
  }

  static insertText(text) {
    this.range.deleteContents(); // delete selected content if any
    let textNode = document.createTextNode(text + "\u00A0");
    this.range.insertNode(textNode);

    this.currentElement.focus();

    // Move the caret to the end of the added text
    const newRange = document.createRange();
    newRange.setStartAfter(textNode);
    newRange.collapse(true);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(newRange);

    this.range = newRange;
  }
}
