const root = document.querySelector(":root");
const editBar = document.querySelector(".edit-bar");

// editor section
const editPgContainer = document.querySelector(".edit-page-container");
const linesNumbersContainer = document.querySelector(
  ".lines-numbers-container"
);
const editor = document.querySelector(".editor.editor-area");
const previewer = document.querySelector(".content-viewer.editor-area");

// Toolbar icons
const dropdowns = document.querySelectorAll(".dropdown");
const dropDownMenus = document.querySelectorAll(".dropdown-menu");
const [fontFamilyMenu, fontSizeMenu, colorsMenu] = dropDownMenus;

const textFormatIcons = document
  .querySelector(".text-format-icons")
  .querySelectorAll(".list-element");

const listsIcons = document
  .querySelector(".lists-icons")
  .querySelectorAll(".list-element");

const inputIcons = document
  .querySelector(".input-icons")
  .querySelectorAll(".list-element");

const qutoesIcons = document
  .querySelector(".quotes-icons")
  .querySelectorAll(".list-element");

// Themes Colors
const darkTheme = new ThemeColors("#282828", "#282828", "#4f4f4f", "white");
const beigeTheme = new ThemeColors("#EAE4DD", "#EAE4DD", "lightgray", "black");
const whiteTheme = new ThemeColors("white", "white", "lightgray", "black");

const themeManager = new ThemeManager(
  editPgContainer,
  editBar,
  linesNumbersContainer,
  "svg-object"
);

themeManager.addTheme(darkTheme, beigeTheme, whiteTheme);