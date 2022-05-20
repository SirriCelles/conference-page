'use strict';

let toggleMenu;
window.onload = (event) => {
  toggleMenu = false;
};

let landingPage = document.querySelector('#landingPage');
let logoSmall = document.querySelector('.nav__logo-small');
// close icon
let closeiconWrapper = document.querySelector('.closeicon-wrapper');
let menuCloseIcon = document.querySelector('.nav__closeicon');
let menuIcon = document.querySelector('.nav__menu-icon');
let backGround = document.querySelector('.show-background');
let navMenu = document.querySelector('.nav__menu');
let navList = document.querySelector('.nav__list');
let menuLinks = document.querySelectorAll('.nav__list-link');

menuIcon.addEventListener('click', function() {
  if(!toggleMenu) {
    onOpenMenu();
    toggleMenu = true;
  }
});

menuCloseIcon.addEventListener('click', function() {
  if(toggleMenu) {
    onCloseMenu();
    toggleMenu = false;
  }
});

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', function() {
    if(toggleMenu) {
      onCloseMenu();
      toggleMenu = false;
    }
  });
});

// open menu
let onOpenMenu = function() {
  backGround.style.display = 'block';
  closeiconWrapper.style.display = 'block';
  landingPage.classList.add('padding-0');
  navMenu.classList.add('nav__menu-small');
  navList.classList.add('nav__list-small');
}

let onCloseMenu = function() {
  backGround.style.display = 'none';
  closeiconWrapper.style.display = 'none';
  landingPage.classList.remove('padding-0');
  navMenu.classList.remove('nav__menu-small');
  navList.classList.remove('nav__list-small');
}