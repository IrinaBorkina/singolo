export class Menu {
    constructor() {
        this.MENU = null;
        this.MENU_LIST = null;
    }

    activeMenu(e) {
        if (!e.target.classList.contains('nav-list__link')) return;

        this.MENU_LIST.forEach(el => el.classList.remove('nav-list__item--active'));
        e.target.classList.add('nav-list__item--active');
    }

    init() {
        this.MENU = document.querySelector('.nav-list');
        this.MENU_LIST = this.MENU.querySelectorAll('.nav-list__link');

        this.MENU.addEventListener('click', this.activeMenu.bind(this));
    }
}
