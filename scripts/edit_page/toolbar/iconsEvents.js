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
