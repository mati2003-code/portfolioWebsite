'use strict';

const hamburgerButton = document.querySelector('.hamburger-menu');
const menuElement1 = document.querySelector('.hamburger-menu__element--1');
const menuElement2 = document.querySelector('.hamburger-menu__element--2');
const menuElement3 = document.querySelector('.hamburger-menu__element--3');
const siteMenu = document.querySelector('.site-menu');
const h1 = document.querySelector('.heading--h1');
const readMoreButton = document.querySelector('.btn--readmore');
const spanElement = document.querySelector('.site-section--span');
const logo = document.querySelector('.logo');
// const inputSubmit = document.querySelector('.form__input--submit');
const msgSent = document.querySelector('.msg-sent');
const inputEmail = document.querySelector('#email');
const inputSubject = document.querySelector('#subject');
const inputContent = document.querySelector('#content');

const scriptURL = 'https://script.google.com/macros/s/AKfycbxeblgKiT7A_Ja4lX2d8G1qSojYXP9qBQx5oEhR16fG_QUf4swGwyLX2WuHpmzdldrQ/exec';
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success!', data);
    if (data.result === 'error') {
      throw new Error(`Server error: ${JSON.stringify(data.error)}`);
    }
    msgSent.classList.remove('color-red');
    msgSent.classList.add('color-green');
    msgSent.innerHTML = 'Message sent successfully';
    setTimeout(() => {
      msgSent.innerHTML = '';
    }, 5000);
    form.reset();
  })
  .catch(error => {
    console.error('Error!', error);
    msgSent.classList.add('color-red');
    msgSent.innerHTML = `Error: ${error.message}`;
  });
});

const siteMenuElements = document.querySelectorAll('.site-menu__writing');

const toggleHamburgerMenu = () => {
  menuElement1.classList.toggle('hideMenuEl1');
  menuElement2.classList.toggle('transformMenuEl2');
  menuElement3.classList.toggle('transformMenuEl3');
}

siteMenuElements.forEach((el) => {
  el.addEventListener('click', () => {
    toggleHamburgerMenu();
    siteMenu.classList.toggle('transform');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  h1.classList.add('animation-appear');
});

logo.addEventListener('click', () => {
  location.reload();
});

readMoreButton.addEventListener('click', () => {
  spanElement.classList.add('animation-appear');  
  spanElement.classList.remove('display-none');
  readMoreButton.classList.add('display-none');
});


hamburgerButton.addEventListener('click', () => {
  toggleHamburgerMenu(); 
  siteMenu.classList.toggle('transform');
});











