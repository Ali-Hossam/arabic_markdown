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
const [fontFamilyMenu, fontSizeMenu, exportsMenu, colorsMenu] = dropDownMenus;

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

// Export Button
const exportButton = document.querySelector(".export");

// Themes Colors
const darkTheme = new ThemeColors("#282828", "#282828", "#82828255", "white");
const beigeTheme = new ThemeColors("#EAE4DD", "#EAE4DD", "#6e6e6e75", "black");
const whiteTheme = new ThemeColors("white", "white", "#6e6e6e75", "black");

const themeManager = new ThemeManager(
  editPgContainer,
  editBar,
  linesNumbersContainer,
  "svg-object"
);

themeManager.addTheme(darkTheme, beigeTheme, whiteTheme);

// Fonts map from css font name to mpdf font
mpdfFontsMap = {
  rakkas: "rakkas",
  "Baloo Bhaijaan 2": "baloo",
  "Reem Kufi": "KFGQPC Uthman Taha Naskh",
  zain: "zain",
  Lateef: "lateef",
  Amiri: "amiri",
};

// Popover
const filenamePopover = document.querySelector("#filenamePopover");
const filenameInput = filenamePopover.querySelector("input");
