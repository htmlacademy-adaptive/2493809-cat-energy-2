const nav = document.querySelector('.main-nav');
const toggleButton = document.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--nojs');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('main-nav__toggle--is-opened');
  if (nav.classList.contains('main-nav--hidden')) {
    nav.classList.remove('main-nav--hidden');
  } else {
    nav.classList.add('main-nav--hidden');
  }
});
