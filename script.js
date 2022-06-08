'use strict';

const mediaQuery = window.matchMedia('(max-width: 690px)');
const navBarEl = document.querySelector('.nav-bar');

function handleViewWidthChange(e) {
  if (e.matches) {
    navBarEl.style.display = 'block'
  } else {
    navBarEl.style.display = 'none'
  }
};

mediaQuery.addEventListener('resize', handleViewWidthChange);
handleViewWidthChange(mediaQuery);

const navMenuEl = document.querySelector('.nav-list');

function toggleMenu() {
  navMenuEl.classList.toggle('move')
}

navBarEl.addEventListener('click', toggleMenu)