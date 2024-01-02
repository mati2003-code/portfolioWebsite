'use strict';

const siteMenu = document.querySelector(".site-menu");
const hamburgerMenuButton = document.querySelector(".fa-solid");

const menuSettings = () => {
  hamburgerMenuButton.addEventListener("click", () => {
    siteMenu.classList.add("animation-appear");
    siteMenu.classList.toggle("display-block");
  });

  siteMenu.addEventListener("click", () => {
    siteMenu.classList.remove("display-block");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      siteMenu.classList.add("animation-disappear");

      setTimeout(() => {
        siteMenu.classList.remove("display-block");
      }, 500);     
    } else {
      siteMenu.classList.remove("animation-disappear");
    }
  });
}

document.addEventListener("DOMContentLoaded", menuSettings);








