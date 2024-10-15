import { userProfile } from "../edit/shared.js";

export let subMenus,
  picSubMenu,
  docSubMenu,
  docMenuScrollbtns,
  userDocs,
  getNotes;

if (userProfile) {
  subMenus = document.querySelectorAll(".sub-menu");
  [picSubMenu, docSubMenu] = subMenus;
  docMenuScrollbtns = docSubMenu.querySelectorAll("button");
  userDocs = document.querySelector("#user-docs");
  getNotes = () => document.querySelectorAll(".note");
}
