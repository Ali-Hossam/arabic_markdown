import {
  themeManager,
  textFormatIcons,
  listsIcons,
  qutoesIcons,
  colorsMenu,
  filenamePopover,
  filenameInput,
  fontFamilyMenu,
  fontSizeMenu,
  inputIcons,
  exportsMenu,
  userProfile,
} from "../shared.js";

import { initProfileMenuEvents } from "../../profile/events.js";
import { initFontHandlers } from "./handlers/fontHandlers.js";
import { initFormatHandlers } from "./handlers/formatHandlers.js";
import { initThemeHandler } from "./handlers/themeHandlers.js";
import { initExportHandler } from "./handlers/exportHandlers.js";


document.addEventListener("dropdownFinished", () => {
  initFontHandlers(fontFamilyMenu, fontSizeMenu);
  initFormatHandlers(textFormatIcons, listsIcons, inputIcons, qutoesIcons);
  initThemeHandler(colorsMenu, themeManager);
  initExportHandler(exportsMenu, filenamePopover, filenameInput);

  if (userProfile) {
    initProfileMenuEvents();
  }
});
