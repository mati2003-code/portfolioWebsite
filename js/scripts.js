'use strict';

import { InfoCookies } from "./modules/InfoCookies.js";
import { PageMenager } from "./modules/PageMenager.js";

const cookie = new InfoCookies();
const pageManager = new PageMenager();

const btnCookie = document.querySelector('.cookies__close');
const logo = document.querySelector('.logo');
const hamburgerButton = document.querySelector('.hamburger-menu');
const siteMenuElements = document.querySelectorAll('.site-menu__writing');
const readMoreButton = document.querySelector('.btn--readmore');

btnCookie.addEventListener('click', e => {
  e.preventDefault();
  cookie.setCookie();
});

window.addEventListener('load', () => {
  pageManager.loadWindow();
});

siteMenuElements.forEach((el) => {
  el.addEventListener('click', () => {
    pageManager.toggleMenu();
    pageManager.transformMenu();
  });
});

logo.addEventListener('click', () => {
  location.reload();
});

readMoreButton.addEventListener('click', () => {
  pageManager.showText()
});

hamburgerButton.addEventListener('click', () => {
  pageManager.toggleMenu();
  pageManager.transformMenu();
});











