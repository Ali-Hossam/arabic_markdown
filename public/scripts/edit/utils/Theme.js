import { changeSVGcolor } from "../../core/functions.js";

export class ThemeColors {
  constructor(primary, secondary, highlight, content) {
    Object.assign(this, { primary, secondary, highlight, content });
  }
}

export class ThemeManager {
  constructor(editor, bar, numbersCol, iconsClass) {
    Object.assign(this, { editor, bar, iconsClass, numbersCol });
    this.themes = [];
  }

  addTheme(...themeColorsSets) {
    this.themes.push(...themeColorsSets);
  }

  setTheme(index) {
    const { primary, secondary, highlight, content } = this.themes[index];

    changeSVGcolor(this.iconsClass, content);

    document.querySelectorAll(".border").forEach(border => border.style.borderColor = highlight);

    const setProperty = (prop, value) => document.documentElement.style.setProperty(prop, value);

    setProperty("--scrollbar-track-color", primary);
    setProperty("--theme-main-color", primary);
    setProperty("--theme-content-color", content);
    setProperty("--theme-secondary-color", secondary);
    setProperty("--theme-highlight-color", highlight);
  }
}
