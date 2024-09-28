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

// Export Button
exportButton.addEventListener("click", (e) => {
  let html;
  const bkgColor = editPgContainer.style.backgroundColor;
  let font = window.getComputedStyle(previewer).fontFamily;
  font = removeFromText(font, '"');

  // Send html conent of the previwer to the server in a post request
  fetch("/styles/edit_page/md.css")
    .then((response) => response.text())
    .then((css) => {
      html = `<!DOCTYPE html>
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
                      background-color: ${document.documentElement.style.getPropertyValue(
                        "--highlight-color"
                      )}
                    }
                  </style>
                </head>
                <body>
                  ${previewer.innerHTML}
                </body>
              </html>
          `;

      console.log(html);
      sendAjaxRequest({ html: html, filename: "Name" }, "/Core/router.php");
    });
});
