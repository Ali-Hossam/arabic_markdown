import { previewer } from "../../shared.js";
import { Caret } from "../../../core/Caret.js";

export const initFontHandlers = (fontFamilyMenu, fontSizeMenu) => {
  fontFamilyMenu.querySelectorAll("li").forEach((element) => {
    element.addEventListener("click", (e) => {
      const chosenFont = e.target.style.fontFamily;
      previewer.style.fontFamily = chosenFont;
    });
  });

  fontSizeMenu.querySelectorAll("li").forEach((element, index) => {
    element.addEventListener("click", () => {
      Caret.insertText("#".repeat(index + 1));
    });
  });
};