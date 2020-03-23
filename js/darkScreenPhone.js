export class Screen {
    constructor() {
        this.PHONE = null;
        this.PHONE_IMG = null;
    }

    darkScreen(e) {
        this.PHONE_IMG.forEach(() => {
            if (e.target.classList.contains("phone-img")) {
                if (e.target.nextElementSibling.classList.contains("screen")) {
                    e.target.nextElementSibling.classList.remove("screen");
                } else {
                    e.target.nextElementSibling.classList.add("screen");
                }
            } else {
                if (e.target.classList.contains("image__screen")) {
                    e.target.classList.add("screen");
                }
            }
        });
    }

    init() {
        this.PHONE = document.querySelector('.slider__wrapper');
        this.PHONE_IMG = document.querySelectorAll('.phone-img');

        this.PHONE.addEventListener('click', this.darkScreen.bind(this));
    }
}
