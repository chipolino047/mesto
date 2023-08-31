import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, submitFunction) {
        super(popupSelector);
        this._submitFunction = submitFunction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFunction({card: this._cardId, card: this._element})
        })
    }

    open = ({card, cardId}) => {
        super.open();
        this._element = card;
        this._cardId = cardId;
    }
}