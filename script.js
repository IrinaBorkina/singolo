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


// slider

const multiItemSlider = (function () {
    return function (selector) {

        const _mainElement = document.querySelector(selector);
        const _sliderWrapper = _mainElement.querySelector('.slider__wrapper');
        const _sliderItems = _mainElement.querySelectorAll('.slider__item');
        const _sliderControls = _mainElement.querySelectorAll('.slider__control');
        const _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
        const _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
        let _positionLeftItem = 0;
        let _transform = 0;
        let _step = _itemWidth / _wrapperWidth * 100;
        let _items = [];

        _sliderItems.forEach(function (item, index) {
            _items.push({
                item: item,
                position: index,
                transform: 0
            });
        });

        const position = {
            getItemMin: function () {
                var indexItem = 0;
                _items.forEach(function (item, index) {
                    if (item.position < _items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getItemMax: function () {
                var indexItem = 0;
                _items.forEach(function (item, index) {
                    if (item.position > _items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getMin: function () {
                return _items[position.getItemMin()].position;
            },
            getMax: function () {
                return _items[position.getItemMax()].position;
            }
        }

        const _transformItem = function (direction) {
            let nextItem;

            if (direction === 'right') {
                _positionLeftItem++;
                if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
                    nextItem = position.getItemMin();
                    _items[nextItem].position = position.getMax() + 1;
                    _items[nextItem].transform += _items.length * 100;
                    _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
                }
                _transform -= _step;
            }

            if (direction === 'left') {
                _positionLeftItem--;
                if (_positionLeftItem < position.getMin()) {
                    nextItem = position.getItemMax();
                    _items[nextItem].position = position.getMin() - 1;
                    _items[nextItem].transform -= _items.length * 100;
                    _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
                }
                _transform += _step;
            }

            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        const _controlClick = function (e) {
            if (e.target.classList.contains('slider__control')) {
                e.preventDefault();
                var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
                _transformItem(direction);
            }
        };

        const _setUpListeners = function () {
            _sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
        }

        _setUpListeners();

        return {
            right: function () {
                _transformItem('right');
            },
            left: function () {
                _transformItem('left');
            }
        }

    }
}());

const slider = multiItemSlider('.slider')



