export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupButtonClose = this._popup.querySelector('.popup__close-img');
        this._form = this._popup.querySelector('.form');
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close()
        };
    }

    _handleButtonClose = () => {
        this.close()
    }

    _handleEscCloseOverlay = (evt) => {
        if (evt.currentTarget === evt.target) {
            this.close()
        };
    }

    setEventListeners() {
        this._popupButtonClose.addEventListener('click', this._handleButtonClose)
        this._popup.addEventListener('click', this._handleEscCloseOverlay)
    }
}