// Change Font Family
fontFamilyMenu.querySelectorAll("li").forEach((element) => {
  element.addEventListener("click", (e) => {
    let choosenFont = e.target.style.fontFamily;
    previewer.style.fontFamily = choosenFont;
  });
});

// Change Font Size
fontSizeMenu.querySelectorAll("li").forEach((element, index) => {
  element.addEventListener("click", (e) => {
    Caret.insertText("#".repeat(index + 1));
  });
});

// Function to setup event listeners for text formatting and list actions
function addClickListenerToIcons(iconElements, formatOptions) {
  iconElements.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      // Insert text at the caret position inside the editor div
      Caret.insertText(formatOptions[index]);
      parseMd();
    });
  });
}

// Text Format (bold, italic, strikethrough)
const textDecoration = ["**سميك**", "_مائل_", "~~مشطوب~~"];
addClickListenerToIcons(textFormatIcons, textDecoration);

// Lists (numbered list, checklist, ordered list)
const listDecoration = ["-", "1.", "- [ ]"];
addClickListenerToIcons(listsIcons, listDecoration);

// Inputs (image, url)
const inputDecoration = ["![اسم الصورة](رابط الصورة)", "[اسم الرابط](الرابط)"];
addClickListenerToIcons(inputIcons, inputDecoration);

// Quotes
const quotesDecoration = ["> اقتباس"];
addClickListenerToIcons(qutoesIcons, quotesDecoration);

// Theme Color
colorsMenu.querySelectorAll("li").forEach((color, index) => {
  color.addEventListener("click", (e) => {
    themeManager.setTheme(index);
  });
});

// Export Menu
exportsMenu.querySelectorAll("li").forEach((element) => {
  element.addEventListener("click", (e) => {
    filenamePopover.togglePopover();
  });
});

function createPdfHtml(previewer, bkgColor, highlightColor, font, css) {
  return `<!DOCTYPE html>
          <html lang="ar" dir="rtl">
            <head>
              <meta charset="UTF-8" />
              <style>
                ${removeFromText(css, ".content-viewer")}
                body {
                  font-family: '${mpdfFontsMap[font]}';
                  background-color: ${bkgColor};
                }

                .md-quotes {
                  background-color: ${highlightColor}
                }
              </style>
            </head>
            <body>
              ${previewer.innerHTML}
            </body>
          </html>`;
}

// Function to save the PDF
function savePdf(filename) {
  const documentStyle = document.documentElement.style;
  const bkgColor = documentStyle.getPropertyValue("--theme-main-color");
  const highlightColor = documentStyle.getPropertyValue(
    "--theme-highlight-color"
  );

  let font = window.getComputedStyle(previewer).fontFamily;
  font = removeFromText(font, '"');

  // Fetch CSS and create the PDF HTML content
  fetch("/styles/edit_page/md.css")
    .then((response) => response.text())
    .then((css) => {
      const html = createPdfHtml(
        previewer,
        bkgColor,
        highlightColor,
        font,
        css
      );
      console.log(html);
      sendAjaxRequest({ html: html, filename: filename }, "/Core/router.php");
    });
}

filenameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let inputText = filenameInput.value.trim();
    if (inputText) {
      // mpdf lib automatically adds .pdf to the file, so if the user enters
      // .pdf we remove it.
      inputText = !inputText.endsWith(".pdf")
        ? inputText
        : inputText.slice(0, -4);
      savePdf(inputText);
      filenamePopover.togglePopover();
    }
  }
});

filenamePopover
  .querySelector("button.submit")
  .addEventListener("click", (e) => {
    let inputText = filenameInput.value.trim();
    if (inputText) {
      // mpdf lib automatically adds .pdf to the file, so if the user enters
      // .pdf we remove it.
      inputText = !inputText.endsWith(".pdf")
        ? inputText
        : inputText.slice(0, -4);
      savePdf(inputText);
      filenamePopover.togglePopover();
    }
  });
