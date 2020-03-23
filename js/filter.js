export class Filter {
    constructor() {
        this.FILTER = null;
        this.FILTER_BUTTON_ARRAY = null;

        this.PORTFOLIO = null;
        this.PORTFOLIO_ARRAY = null;
    }

    filterImage(e) {
        if (!e.target.classList.contains('filter-block__button')) return;

        this.FILTER_BUTTON_ARRAY.forEach(el => el.classList.remove('filter-block__button--active'));
        e.target.classList.add('filter-block__button--active');
        this.shuffleNodes();
    }

    isActiveButton(e) {
        this.PORTFOLIO_ARRAY.forEach(el => el.classList.remove('portfolio-block__item--active'));
        e.target.classList.add('portfolio-block__item--active');
    }

    shuffleNodes() {
        let nodes = this.PORTFOLIO.children;
        let i = 0;

        while (i < nodes.length) {
            this.PORTFOLIO.appendChild(nodes[i]);
            ++i;
        }
    }

    init() {
        this.FILTER = document.querySelector('.filter-block');
        this.FILTER_BUTTON_ARRAY = this.FILTER.querySelectorAll('.filter-block__button');

        this.PORTFOLIO = document.querySelector('.portfolio-block');
        this.PORTFOLIO_ARRAY = this.PORTFOLIO.querySelectorAll('.portfolio-block__item')

        this.FILTER.addEventListener('click', this.filterImage.bind(this));
        this.PORTFOLIO.addEventListener('click', this.isActiveButton.bind(this))
    }
}
