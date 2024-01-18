export class PageMenager {
  constructor() {
    this.menuElement1 = document.querySelector('.hamburger-menu__element--1');
    this.menuElement2 = document.querySelector('.hamburger-menu__element--2');
    this.menuElement3 = document.querySelector('.hamburger-menu__element--3');
    this.siteMenu = document.querySelector('.site-menu'); 
    this.h1 = document.querySelector('.heading--h1');
    this.spanElement = document.querySelector('.site-section--span');
    this.readMoreButton = document.querySelector('.btn--readmore');
  }

  loadWindow() {
    window.scrollTo(0, 0);
    history.replaceState({}, document.title, window.location.pathname); 
    this.h1.classList.add('animation-appear');
  }

  toggleMenu() {
    this.menuElement1.classList.toggle('hideMenuEl1');
    this.menuElement2.classList.toggle('transformMenuEl2');
    this.menuElement3.classList.toggle('transformMenuEl3');
  }

  transformMenu() {
    this.siteMenu.classList.toggle('transform');
  }

  showText() {
    this.spanElement.classList.add('animation-appear');  
    this.spanElement.classList.remove('display-none');
    this.readMoreButton.classList.add('display-none');
  }


}
