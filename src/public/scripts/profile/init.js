import { initDeleteNote } from "./deleteNote.js";
import { picSubMenu } from "./shared.js";
import { initShowNote } from "./showNote.js";

export const initNotesList = () => {
  initDeleteNote();
  initShowNote();
};

export const initProfilePics = () => {
  const ul = picSubMenu.querySelector("ul");
  for (let index = 1; index < 17; index++) {
    const img = document.createElement("img");
    img.src = `/assets/profiles/users-${index}.svg`;
    img.alt = `users-${index}.svg`;
    img.classList.add("profile-pic");

    const li = document.createElement("li");
    li.appendChild(img);
    ul.appendChild(li);
  }
};

