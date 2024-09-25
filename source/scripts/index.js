/* в этот файл добавляет скрипты*/
const toggleButton = document.querySelector('.main-header__toggle');
const nav = document.querySelector('.main-nav__wrapper');

toggleButton.onclick = () => {
  toggleButton.classList.toggle('main-header__toggle--is-opened');
  if (nav.classList.contains('main-nav__wrapper--hidden')) {
    nav.classList.remove('main-nav__wrapper--hidden');
  } else {
    nav.classList.add('main-nav__wrapper--hidden');
  }
};
