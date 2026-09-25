const openMenuBtn = document.querySelector('.header-menu-btn');
const mobMenu = document.querySelector('#mob-menu');
const closeMenuBtn = document.querySelector('.mob-menu-close-btn');

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function openMenu() {
  mobMenu.classList.add('is-open');
  document.body.classList.add('scroll-locked');
}

function closeMenu() {
  mobMenu.classList.remove('is-open');
  document.body.classList.remove('scroll-locked');
}

document
  .querySelectorAll('.mob-menu-logo, .mob-menu-nav-link, .mob-menu-book-btn')
  .forEach(link => {
    link.addEventListener('click', closeMenu);
  });
