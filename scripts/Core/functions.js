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

function getActiveElement() {
  const selection = window.getSelection();
  activeElement = selection.focusNode;
  return activeElement;
}

function digitsToArabic(text) {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  return text.replace(/\d/g, (match) => {
    return arabicNumerals[+match];
  });
}

function htmlDigitsToArabic(html) {
  return html.replace(/>\d+</g, function (match) {
    const arabicNumber = digitsToArabic(match);
    return arabicNumber;
  });
}

function delayExec(callback, delay) {
  setTimeout(() => {
    callback();
  }, delay);
}

function loadLib(path) {
  const script = document.createElement("script");
  script.src = "/scripts/" + path;
  script.defer = true;
  document.head.appendChild(script);
}

function changeSVGcolor(objectsClass, color) {
  const svgObjects = document.querySelectorAll(`.${objectsClass}`);

  svgObjects.forEach((svg) => {
    const paths = svg.contentDocument.querySelectorAll("path");

    paths.forEach((path) => {
      path.setAttribute("fill", color);
    });
  });
}

function sendAjaxRequest(data, url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("Success", xhr.responseText);
      } else {
        console.error("Error: ", xhr.statusText);
      }
    }
  };

  var data =
    "html=" +
    encodeURIComponent(data.html) +
    "&filename=" +
    encodeURIComponent(data.filename);

  xhr.send(data);
}


function removeFromText(text, toRemove) {
  const regex = new RegExp(toRemove, 'g');
  return text.replace(regex, "");
}