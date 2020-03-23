import { Filter } from './js/filter.js';
import { Menu } from './js/activeMenu.js';
import { Form } from './js/form.js';
import { Screen } from './js/darkScreenPhone.js';
import './js/slider.js'


window.onload = () => {
    const filter = new Filter();
        filter.init();

        const menu = new Menu();
        menu.init();

        const screen = new Screen();
        screen.init();

        const form = new Form();
        form.init();
}
