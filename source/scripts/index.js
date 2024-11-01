const navEl = document.querySelector('.main-nav');
const toggleButton = document.querySelector('.main-nav__toggle');
const staticMapEl = document.querySelector('.partnership__map-static');
const mapEl = document.querySelector('.partnership__map');

navEl.classList.remove('main-nav--nojs');
staticMapEl.classList.remove('partnership__map-static--nojs');
mapEl.classList.remove('partnership__map--nojs');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('main-nav__toggle--is-opened');
  navEl.classList.toggle('main-nav--hidden');
});
