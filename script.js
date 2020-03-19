const MENU = document.querySelector('.nav-list');
const MENU_LIST = MENU.querySelectorAll('li');

const FILTER = document.querySelector('.filter-block');
const FILTER_BUTTON_ARRAY = FILTER.querySelectorAll('.filter-block__button');

const PORTFOLIO = document.querySelector('.portfolio-block');
const PORTFOLIO_ARRAY = PORTFOLIO.querySelectorAll('.portfolio-block__item')


MENU.addEventListener('click', e => {
    if (!e.target.classList.contains('nav-list__link')) return;
    
    MENU_LIST.forEach(el => el.classList.remove('nav-list__item--active'));
    e.target.parentElement.classList.add('nav-list__item--active');
})



FILTER.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-block__button')) return;

    FILTER_BUTTON_ARRAY.forEach(el => el.classList.remove('filter-block__button--active'));
    e.target.classList.add('filter-block__button--active');
    shuffleNodes();
})


PORTFOLIO.addEventListener('click', e => {
    PORTFOLIO_ARRAY.forEach(el => el.classList.remove('portfolio-block__item--active'));
    e.target.classList.add('portfolio-block__item--active');
})


function shuffleNodes() {
    let nodes = PORTFOLIO.children;
    let i = 0;
    
    while (i < nodes.length) {
        PORTFOLIO.appendChild(nodes[i]);
        ++i;
    }
}


