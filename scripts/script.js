'use strict';

const hamburgerButton = document.querySelector('.hamburger-menu');
const menuElement1 = document.querySelector('.hamburger-menu__element--1');
const menuElement2 = document.querySelector('.hamburger-menu__element--2');
const menuElement3 = document.querySelector('.hamburger-menu__element--3');
const siteMenu = document.querySelector('.site-menu');
const h1 = document.querySelector('.heading--h1');
const readMoreButton = document.querySelector('.btn--readmore');
const spanElement = document.querySelector('.site-section--span');

readMoreButton.addEventListener('click', () => {
  spanElement.classList.add('animation-appear');  
  spanElement.classList.remove('display-none');
  readMoreButton.classList.add('display-none');
});

hamburgerButton.addEventListener('click', () => {
  menuElement1.classList.toggle('hideMenuEl1')
  menuElement2.classList.toggle('transformMenuEl2')
  menuElement3.classList.toggle('transformMenuEl3')
  siteMenu.classList.toggle('transform');
});

window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  h1.classList.add('animation-appear');
});










