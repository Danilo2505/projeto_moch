const buttonMenu = document.getElementById("button-menu-toggle");
const headerTopBar = document.getElementById("header-top-bar");

buttonMenu.addEventListener("click", () => {
  headerTopBar.classList.toggle("menu-open");
});

/*
const buttonMenuToggle = document.querySelector("#button-menu-toggle");

buttonMenuToggle.addEventListener("click", () => {
  if (buttonMenuToggle.hasAttribute("close")) {
    buttonMenuToggle.removeAttribute("close");
  } else {
    buttonMenuToggle.setAttribute("close", "");
  }
});
*/
