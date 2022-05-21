let toggleMenu;
window.onload = (event) => {
  toggleMenu = false;
};

const landingPage = document.querySelector('#landingPage');
const logoSmall = document.querySelector('.nav__logo-small');
// close icon
const closeiconWrapper = document.querySelector('.closeicon-wrapper');
const menuCloseIcon = document.querySelector('.nav__closeicon');
const menuIcon = document.querySelector('.nav__menu-icon');
const backGround = document.querySelector('.show-background');
const navMenu = document.querySelector('.nav__menu');
const navList = document.querySelector('.nav__list');
const menuLinks = document.querySelectorAll('.nav__list-link');

menuIcon.addEventListener('click', () => {
  if (!toggleMenu) {
    onOpenMenu();
    toggleMenu = true;
  }
});

menuCloseIcon.addEventListener('click', () => {
  if (toggleMenu) {
    onCloseMenu();
    toggleMenu = false;
  }
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    if (toggleMenu) {
      onCloseMenu();
      toggleMenu = false;
    }
  });
});

// open menu
let onOpenMenu = function () {
  backGround.style.display = 'block';
  closeiconWrapper.style.display = 'block';
  landingPage.classList.add('padding-0');
  navMenu.classList.add('nav__menu-small');
  navList.classList.add('nav__list-small');
};

let onCloseMenu = function () {
  backGround.style.display = 'none';
  closeiconWrapper.style.display = 'none';
  landingPage.classList.remove('padding-0');
  navMenu.classList.remove('nav__menu-small');
  navList.classList.remove('nav__list-small');
};