export class Form {
    constructor() {
        this.FORM = null;
        this.MODAL_WINDOW = null;
        this.MODAL_SUBJECT = null;
        this.MODAL_MESSAGE = null;

        this.FORM_SUBJECT = null;
        this.FORM_MESSAGE = null;

        this.MODAL_SUBJECT_CAPTION = null;
        this.MODAL_MESSAGE_CAPTION = null;
    }

    modalClickEvent(e) {
        const target = e.target;
        const isTargetButton = target.classList.contains('modal__button');

        if (isTargetButton) {
            this.MODAL_WINDOW.classList.remove('modal--open');
            this.MODAL_WINDOW.removeEventListener('click', this.modalClickEvent.bind(this));
            this.FORM.reset();
        }
    }

    modalWindow(e) {
        e.preventDefault();

        this.MODAL_SUBJECT_CAPTION.innerText = this.FORM_SUBJECT.value === '' ? 'No subject' : 'Subject:';
        this.MODAL_MESSAGE_CAPTION.innerText = this.FORM_MESSAGE.value === '' ? 'No description' : 'Description:';

        this.MODAL_SUBJECT.innerText = this.FORM_SUBJECT.value;
        this.MODAL_MESSAGE.innerText = this.FORM_MESSAGE.value;

        this.MODAL_WINDOW.addEventListener('click', this.modalClickEvent.bind(this));
        this.MODAL_WINDOW.classList.add('modal--open');
    }

    init() {
        this.FORM = document.querySelector('.form-submit');
        this.MODAL_WINDOW = document.querySelector('.modal');
        this.MODAL_SUBJECT = this.MODAL_WINDOW.querySelector('.modal__subject');
        this.MODAL_MESSAGE = this.MODAL_WINDOW.querySelector('.modal__description');

        this.FORM_SUBJECT = this.FORM.querySelector('.form-subject');
        this.FORM_MESSAGE = this.FORM.querySelector('.form-message');

        this.MODAL_SUBJECT_CAPTION = this.MODAL_WINDOW.querySelector('.modal__subject-title');
        this.MODAL_MESSAGE_CAPTION = this.MODAL_WINDOW.querySelector('.modal__description-title');

        this.FORM_BUTTON = document.querySelector('.form-button');


        this.FORM_BUTTON.addEventListener('click', this.modalClickEvent.bind(this));
        this.FORM.addEventListener('submit', this.modalWindow.bind(this));
    }
}
