export function countLines(element) {
  // Count wrapped lines in an element
  const computedStyle = window.getComputedStyle(element);
  const lineHeight = parseFloat(computedStyle.lineHeight);
  const elementHeight = element.offsetHeight;
  return Math.round(elementHeight / lineHeight);
}

export function trimStartingBr(element) {
  while (element.firstChild && element.firstChild.nodeName === "BR") {
    element.removeChild(element.firstChild);
  }
}

export function trimEndingBr(element) {
  while (element.lastChild && element.lastChild.nodeName === "BR") {
    element.removeChild(element.lastChild);
  }
}

export function createDivElement() {
  const div = document.createElement("div");
  div.appendChild(document.createElement("br"));
  return div;
}

export function getActiveElement() {
  const selection = window.getSelection();
  activeElement = selection.focusNode;
  return activeElement;
}

export function digitsToArabic(text) {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  return text.replace(/\d/g, (match) => {
    return arabicNumerals[+match];
  });
}

export function htmlDigitsToArabic(html) {
  return html.replace(/>\d+</g, function (match) {
    const arabicNumber = digitsToArabic(match);
    return arabicNumber;
  });
}

export function delayExec(callback, delay) {
  setTimeout(() => {
    callback();
  }, delay);
}

export function loadLib(path, isModule = true) {
  const script = document.createElement("script");
  script.src = "/scripts/" + path;
  script.defer = true;
  if (isModule) script.setAttribute("type", "module");
  document.head.appendChild(script);
}

export function changeSVGcolor(objectsClass, color) {
  if (objectsClass) {
    const svgObjects = document.querySelectorAll(`.${objectsClass}`);
    if (svgObjects.length) {
      svgObjects.forEach((svg) => {
        if (svg.contentDocument) {
          const paths = svg.contentDocument.querySelectorAll("path");

          paths.forEach((path) => {
            path.setAttribute("fill", color);
          });
        }
      });
    }
  }
}

export function removeFromText(text, toRemove) {
  const regex = new RegExp(toRemove, "g");
  return text.replace(regex, "");
}

export function removeFromTextEnd(text, ...toRemove) {
  toRemove.forEach((substring) => {
    if (text.endsWith(substring)) {
      text = text.slice(0, -substring.length);
    }
  });
  return text;
}

export function saveToSession(key, value) {
  window.sessionStorage.setItem(key, value);
}

export function getFromSession(key) {
  return window.sessionStorage.getItem(key);
}

// DELETE
export function setCookie(key, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie =
    key + "=" + encodeURIComponent(value) + expires + "; path=/";
}

export function getCookie(key) {
  const keyEQ = key + "=";
  const cookiesArr = document.cookie.split(";");
  for (let cookie of cookiesArr) {
    cookie = cookie.trim();
    if (cookie.indexOf(keyEQ) === 0) {
      // if it starts with keyEQ
      // removes the cookie name and the equal sign
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
}
// DELETE
