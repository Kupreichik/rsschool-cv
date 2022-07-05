'use strict';

const navBarEl = document.querySelector('.nav-bar');

function handleViewWidthChange() {
  if (window.matchMedia('(max-width: 690px)').matches) {
    navBarEl.style.display = 'block'
  } else {
    navBarEl.style.display = 'none'
  }
};

window.addEventListener('resize', handleViewWidthChange);
handleViewWidthChange();

const navMenuEl = document.querySelector('.nav-list');

function toggleMenu() {
  navMenuEl.classList.toggle('nav-list-show');
};

navBarEl.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
  });
document.addEventListener('click', e => {
  if(!e.target.classList.contains('nav-list') && navMenuEl.classList.contains('nav-list-show')) {
    navMenuEl.classList.toggle('nav-list-show');
  }
});