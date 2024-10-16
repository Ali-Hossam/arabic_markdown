import { Caret } from "../../../core/Caret.js";
import { parseMd } from "../../utils/parseMd.js";

const addClickListenerToIcons = (iconElements, formatOptions) => {
  iconElements.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      Caret.insertText(formatOptions[index]);
      parseMd();
    });
  });
};

export const initFormatHandlers = (textFormatIcons, listsIcons, inputIcons, qutoesIcons) => {
  const textDecoration = ["**سميك**", "_مائل_", "~~مشطوب~~"];
  const listDecoration = ["-", "1.", "- [ ]"];
  const inputDecoration = ["![اسم الصورة](رابط الصورة)", "[اسم الرابط](الرابط)"];
  const quotesDecoration = ["> اقتباس"];

  addClickListenerToIcons(textFormatIcons, textDecoration);
  addClickListenerToIcons(listsIcons, listDecoration);
  addClickListenerToIcons(inputIcons, inputDecoration);
  addClickListenerToIcons(qutoesIcons, quotesDecoration);
};