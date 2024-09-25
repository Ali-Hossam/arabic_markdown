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

    this.editor.style.backgroundColor = theme.primary;
    this.editor.style.color = theme.content;
    this.bar.style.backgroundColor = theme.secondary;
    this.numbersCol.style.backgroundColor = theme.primary;

    changeSVGcolor(this.iconsClass, theme.content);

    // Change button color
    document.querySelector(".edit-bar button").style.color = theme.content;
    document.querySelector(".edit-bar button").style.borderColor =
      theme.content;

    // Change dropdown menu icons color
    document.querySelectorAll(".dropdown-icon").forEach((dropDown) => {
      dropDown.style.color = theme.content;
    });

    // Change dropdown menu color
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.style.color = theme.content;
      menu.style.backgroundColor = theme.secondary;
      menu.style.borderColor = theme.highlight;
    });

    // Change tooltip color 
    document.querySelectorAll(".tooltip").forEach((tooltip) => {
      tooltip.style.color = theme.content;
      tooltip.style.backgroundColor = theme.secondary;
      tooltip.style.borderColor = theme.highlight;
    });

    // Change border color
    document.querySelectorAll(".border").forEach((border) => {
      border.style.borderColor = theme.highlight;
    });

    // Change scroll background & border
    document.documentElement.style.setProperty('--scrollbar-track-color', theme.primary);
    document.querySelector(".editor-area")
    
    // Change quotes highlight bkg color
    document.documentElement.style.setProperty('--highlight-color', theme.highlight);
    document.querySelector(".previewer")
  }
}