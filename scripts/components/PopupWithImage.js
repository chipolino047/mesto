import Popup from "./Popup.js";

export default class PopupWidthImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__figure-img');
        this._popupFigureText = this._popup.querySelector('.popup__figure-text');
    }

    open = (dataCard) => {
        super.open();
        this._popupImage.src = dataCard.link;
        this._popupImage.alt = `Картинка ${dataCard.name}`;
        this._popupFigureText.textContent = dataCard.name;
    }
}