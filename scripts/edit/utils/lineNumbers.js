import { editor, linesNumbersContainer } from "../shared.js";
import { trimStartingBr, htmlDigitsToArabic, countLines} from "../../core/functions.js";

export function updateLineNumbers() {
  // Sometimes a <br> tag is included at the begining of the contentEditor div
  // without a <div> container, so we remove it.
  trimStartingBr(editor);

  // Get all child <div> elements of the content editor, where each <div>
  // represents a paragraph.
  const paragraphs = editor.querySelectorAll("div");
  const numberOfParagraphs = paragraphs.length;
  let lineNumbersHTML = `<li class='line-number'>${1}</li>`;

  // for each paragraph if there is wrapped text we add <br> in their line No.
  for (let i = 1; i < numberOfParagraphs; i++) {
    let textNoLines = countLines(paragraphs[i - 1]);

    if (textNoLines) {
      lineNumbersHTML += Array(textNoLines - 1)
        .fill("<li>&nbsp;</li>")
        .join("");
    }

    lineNumbersHTML += `<li class='line-number'>${i + 1}</li>`;
  }

  lineNumbersHTML = htmlDigitsToArabic(lineNumbersHTML);
  linesNumbersContainer.innerHTML = lineNumbersHTML;
}

// Add event listener to update lines numbers when typing
editor.addEventListener("input", (e) => {
  updateLineNumbers();
});

// Prevent the default behavior of 'Shift + Enter as it makes problems with numbering
editor.addEventListener("keydown", function (event) {
  if (event.shiftKey && event.key === "Enter") {
    event.preventDefault();
  }
});

// Intialize the first time
updateLineNumbers();
