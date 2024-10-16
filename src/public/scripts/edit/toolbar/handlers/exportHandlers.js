import { exportDoc } from "../../../api.js";
import { removeFromText, removeFromTextEnd } from "../../../core/functions.js";
import { previewer, mpdfFontsMap } from "../../shared.js";

function sendExportRequest(html, filename, type) {
  exportDoc(html, filename, type)
    .then((blob) => {
      console.log(blob);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.${type}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Problem fetching : ", error);
    });
}

const createPdfHtml = (previewer, bkgColor, highlightColor, font, css) => {
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
};

const savePdf = (filename) => {
  const documentStyle = document.documentElement.style;
  const bkgColor = documentStyle.getPropertyValue("--theme-main-color");
  const highlightColor = documentStyle.getPropertyValue(
    "--theme-highlight-color"
  );
  let font = window.getComputedStyle(previewer).fontFamily;
  font = removeFromText(font, '"');

  fetch("/styles/edit/md.css")
    .then((response) => response.text())
    .then((css) => {
      const html = createPdfHtml(
        previewer,
        bkgColor,
        highlightColor,
        font,
        css
      );
      sendExportRequest(html, filename, "pdf");
    });
};

const saveDocx = (filename) => {
  console.log(previewer.innerHTML);
  sendExportRequest(previewer.innerHTML, filename, "docx");
};

const saveHtml = (filename) => {
  sendExportRequest(previewer.innerHTML, filename, "html");
};

// Init popover menu when one of the export buttons is pressed
const exportTypeList = ["pdf", "docx", "html"];
export const initExportHandler = (
  exportsMenu,
  filenamePopover,
  filenameInput
) => {
  exportsMenu.querySelectorAll("li").forEach((element, index) => {
    element.addEventListener("click", () => {
      filenamePopover.setAttribute("type", exportTypeList[index]);
      filenamePopover.togglePopover();
    });
  });

  const handleFilenameInput = () => {
    let inputText = filenameInput.value.trim();
    if (inputText) {
      inputText = removeFromTextEnd(inputText, ".pdf", ".docx", ".html");
      let exportType = filenamePopover.getAttribute("type");
      switch (exportType) {
        case "pdf":
          savePdf(inputText);
          break;

        case "docx":
          saveDocx(inputText);
          break;

        case "html":
          saveHtml(inputText);
          break;
      }
      filenamePopover.togglePopover();
    }
  };

  filenameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleFilenameInput();
    }
  });

  filenamePopover
    .querySelector("button.submit")
    .addEventListener("click", handleFilenameInput);
};
