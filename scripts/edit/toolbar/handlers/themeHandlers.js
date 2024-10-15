import { saveToSession } from "../../../core/functions.js";

export const initThemeHandler = (colorsMenu, themeManager) => {
  colorsMenu.querySelectorAll("li").forEach((color, index) => {
    color.addEventListener("click", () => {
      themeManager.setTheme(index);
      saveToSession('theme', index);
    });
  });
};