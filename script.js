const MENU = document.querySelector('.nav-list');
const MENU_LIST = MENU.querySelectorAll('li');


MENU.addEventListener('click', e => {
    if (!e.target.classList.contains('nav-list__link')) return;
    
    MENU_LIST.forEach(el => el.classList.remove('nav-list__item--active'));
    e.target.parentElement.classList.add('nav-list__item--active');
})


