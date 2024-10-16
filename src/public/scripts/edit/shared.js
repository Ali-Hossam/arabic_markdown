import { ThemeColors, ThemeManager } from "./utils/Theme.js";

// DOM Elements
export const root = document.querySelector(":root");
export const editBar = document.querySelector(".edit-bar");
export const editPgContainer = document.querySelector(".edit-page-container");
export const linesNumbersContainer = document.querySelector(".lines-numbers-container");
export const editor = document.querySelector(".editor.editor-area");
export const previewer = document.querySelector(".content-viewer.editor-area");

// Toolbar icons
export const dropdowns = document.querySelectorAll(".dropdown");
export const dropDownMenus = document.querySelectorAll(".dropdown-menu");
export const [fontFamilyMenu, fontSizeMenu, colorsMenu, exportsMenu, profileMenu] = dropDownMenus;
export const textFormatIcons = document.querySelector(".text-format-icons").querySelectorAll(".list-element");
export const listsIcons = document.querySelector(".lists-icons").querySelectorAll(".list-element");
export const inputIcons = document.querySelector(".input-icons").querySelectorAll(".list-element");
export const qutoesIcons = document.querySelector(".quotes-icons").querySelectorAll(".list-element");

// Export Button
export const exportButton = document.querySelector(".export");

// Theme Colors
const darkTheme = new ThemeColors("#282828", "#282828", "#82828255", "white");
const beigeTheme = new ThemeColors("#EAE4DD", "#EAE4DD", "#6e6e6e75", "black");
const whiteTheme = new ThemeColors("white", "white", "#6e6e6e75", "black");

// Theme Manager
export const themeManager = new ThemeManager(
  editPgContainer,
  editBar,
  linesNumbersContainer,
  "svg-object"
);
themeManager.addTheme(darkTheme, beigeTheme, whiteTheme);

// Fonts map from CSS font name to mpdf font
export const mpdfFontsMap = {
  rakkas: "rakkas",
  "Baloo Bhaijaan 2": "baloo",
  "Reem Kufi": "KFGQPC Uthman Taha Naskh",
  zain: "zain",
  Lateef: "lateef",
  Amiri: "amiri",
};

// Popover
export const filenamePopover = document.querySelector("#filenamePopover");
export const filenameInput = filenamePopover ? filenamePopover.querySelector("input") : null;

// Submenus
export const userProfile = document.querySelector(".user-profile");
