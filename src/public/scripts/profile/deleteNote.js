import { deleteDoc } from "../api.js";
import { getNotes } from "./shared.js";

export const initDeleteNote = () => {
  getNotes().forEach((note) => {
    const noteText = note.querySelector("span");
    const deleteBtn = note.querySelector(".rmv-note-btn-container");

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteDoc(noteText.innerText)
        .then(() => note.remove())
        .catch((error) => console.error(`Error deleting note: ${error}`));
    });
  });
};
