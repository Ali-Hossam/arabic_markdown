import { getDoc } from "../api.js";
import { editor } from "../edit/shared.js";
import { parseMd } from "../edit/utils/parseMd.js";
import { getNotes } from "./shared.js";

export function initShowNote() {
  getNotes().forEach((note) => {
    note.addEventListener("click", (e) => {
      const noteTitle = note.querySelector("span").innerText;

      getDoc(noteTitle)
        .then((data) => {
          console.log(data);

          // add document to content viewer - TODO : CURSOR BLINK & Line Numbers
          editor.innerHTML = data;
          parseMd();
        })
        .catch((error) => {
          console.log("Failed to get Document: ", error);
        });
    });
  });
}
