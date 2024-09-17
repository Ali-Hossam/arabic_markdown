function countLines(element) {
  // Count wrapped lines in an element
  const computedStyle = window.getComputedStyle(element);
  const lineHeight = parseFloat(computedStyle.lineHeight);
  const elementHeight = element.offsetHeight;
  return Math.round(elementHeight / lineHeight);
}

function trimStartingBr(element) {
  while (element.firstChild && element.firstChild.nodeName === "BR") {
    element.removeChild(element.firstChild);
  }
}

function trimEndingBr(element) {
  while (element.lastChild && element.lastChild.nodeName === "BR") {
    element.removeChild(element.lastChild);
  }
}


function createDivElement() {
  const div = document.createElement("div");
  div.appendChild(document.createElement("br"));
  return div;
}