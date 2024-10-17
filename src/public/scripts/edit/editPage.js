import { Caret } from "../core/Caret.js";
import { createDivElement, getCookie, getFromSession, setCookie } from "../core/functions.js";
import { editor, themeManager } from "./shared.js";
import { highlightLine } from "./utils/highlightActiveLine.js";
import { parseMd } from "./utils/parseMd.js";

// Initialize the editor
function initializeEditor() {
  addFirstLine();
  setupEventListeners();
  parseMd();
}

// Create and add the first line
function addFirstLine() {
  const div = createDivElement();
  editor.appendChild(div);
  Caret.setPosition(div);
  Caret.updatePosition();
  highlightLine();
}

// Set up event listeners for the editor
function setupEventListeners() {
  editor.addEventListener("keydown", handleKeyDown);
  editor.addEventListener("dragstart", handleDragStart);
  editor.addEventListener("input", handleInput);
  editor.addEventListener("pointerup", handlePointerUp);
}

// Handle keydown events
function handleKeyDown() {
  setTimeout(() => {
    if (editor.childElementCount === 0) {
      addFirstLine();
    }
  }, 1);
}

// Prevent default drag behavior
function handleDragStart(e) {
  e.preventDefault();
}

// Update caret position on input
function handleInput() {
  Caret.updatePosition();
}

// Update caret position on pointer up
function handlePointerUp() {
  setTimeout(() => {
    Caret.updatePosition();
  }, 1);
}

const WHITE_THEME = 2;
themeManager.setTheme(getFromSession("theme") ?? WHITE_THEME);
initializeEditor();