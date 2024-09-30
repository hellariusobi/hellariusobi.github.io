let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector("#navigation");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
