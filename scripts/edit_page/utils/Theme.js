class ThemeColors {
  constructor(primary, secondary, highlight, content) {
    this.primary = primary;
    this.secondary = secondary;
    this.highlight = highlight;
    this.content = content;
  }
}

class ThemeManager {
  constructor(editor, bar, numbersCol, iconsClass) {
    this.editor = editor;
    this.bar = bar;
    this.iconsClass = iconsClass;
    this.numbersCol = numbersCol;
    this.themes = [];
  }

  addTheme(...themeColorsSets) {
    themeColorsSets.forEach((themeColorSet) => {
      this.themes.push(themeColorSet);
    });
  }

  setTheme(index) {
    const theme = this.themes[index];

    changeSVGcolor(this.iconsClass, theme.content);

    // Change border color
    document.querySelectorAll(".border").forEach((border) => {
      border.style.borderColor = theme.highlight;
    });

    // Change scroll background & border
    document.documentElement.style.setProperty('--scrollbar-track-color', theme.primary);
    document.querySelector(".editor-area")
        
    // Chnage theme color
    document.documentElement.style.setProperty('--theme-main-color', theme.primary);
    document.documentElement.style.setProperty('--theme-content-color', theme.content);
    document.documentElement.style.setProperty('--theme-secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--theme-highlight-color', theme.highlight);
 
 
  }
}