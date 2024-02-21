const menu_toggler: HTMLElement = document.querySelector("nav > button");
const menu: HTMLElement = document.querySelector("nav > ul");

menu.setAttribute("collapsed-on-narrow-screens", "true");

menu_toggler.addEventListener("click", () => {
  if (menu.getAttribute("collapsed-on-narrow-screens") === "true") {
    menu.setAttribute("collapsed-on-narrow-screens", "false");
  } else {
    menu.setAttribute("collapsed-on-narrow-screens", "true");
  }
});
