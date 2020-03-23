export class scrollMenu {
    constructor() {
        this.SECTION = null;
        this.ACTIVE_MENU_LINK = null;
    }

    onScroll(e) {
        const curPos = window.scrollY + 60;    
    
        this.SECTION.forEach(el => {
    
            if (el.offsetTop  <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
                this.ACTIVE_MENU_LINK.forEach(a => {
                    a.classList.remove('nav-list__item--active');
    
                    if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                        a.classList.add('nav-list__item--active');
                    }
                })
            }
        })
    }

    init() {
        this.SECTION = document.querySelectorAll('section');
        this.ACTIVE_MENU_LINK = document.querySelectorAll('.nav-list__link');

        document.addEventListener('scroll', this.onScroll.bind(this));
    }
}
