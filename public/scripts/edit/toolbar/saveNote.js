import { addDoc } from "../../api.js";
import { delayExec } from "../../core/functions.js";
import { initDeleteNote } from "../../profile/deleteNote.js";
import { getNotes, userDocs } from "../../profile/shared.js";
import { initShowNote } from "../../profile/showNote.js";
import { editor, userProfile } from "../shared.js";

if (userProfile) {
  const filenameContainer = document.querySelector("#filename-container");
  const filenameInput = filenameContainer.querySelector("input");
  const saveBtn = filenameContainer.querySelector("#save");

  const handleSaveSuccess = (filename) => {
    filenameInput.classList.add("correct");
    filenameInput.value = "تم الحفظ";
    delayExec(() => {
      filenameInput.classList.remove("correct");
      filenameInput.value = filename;
    }, 1000);

    userDocs.innerHTML += createNoteListItem(filename);
    initDeleteNote();
    initShowNote();
  };

  const saveNote = async () => {
    const filename = filenameInput.value;
    if (!filename) {
      filenameInput.classList.add("error");
      delayExec(() => filenameInput.classList.remove("error"), 500);
      return;
    }

    try {
      const doc = editor.innerHTML;
      await addDoc(doc, filename);
      handleSaveSuccess(filename);
    } catch (error) {
      console.error(`Error saving note: ${error}`);
    }
  };

  const createNoteListItem = (noteTitle) => `
  <li class='space-between note'>
    <span>${noteTitle}</span>
    <div class='flex rmv-note-btn-container'>
      <object class='svg-object rmv-note-btn' data='/assets/delete.svg' alt='remove'></object>
    </div>
  </li>
`;

  saveBtn.addEventListener("click", saveNote);
}
