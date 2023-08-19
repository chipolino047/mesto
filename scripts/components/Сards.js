export {Card}

  //создаём класс 
class Card {
  //Конструктор определяет данные карточки 
  constructor(dataCard, templateElement, openImgPopup) {
    this._dataCard = dataCard;
    this._link = dataCard.link;
    this._name = dataCard.title;
    this._templateElement = templateElement;
    this._openImgPopup = openImgPopup;
  }

  //Клонирует темплейт в секцию
  _getTemplate() {
    return document.querySelector(this._templateElement).content.querySelector('.element').cloneNode(true);
  }

  //Определяет элементы темплейта и возвращает готовый метод
  createCard() {
    this._getElement = this._getTemplate();
    this._imageElement = this._getElement.querySelector('.element__img');
    this._textElement = this._getElement.querySelector('.element__text');
    this._likeElement = this._getElement.querySelector('.element__heart');
    this._deleteElement = this._getElement.querySelector('.element__delete');
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._setEventListeners()
    return this._getElement
  }

  //метод отвечающий за лайки
  _clickLikeInCard() {
    this._likeElement.classList.toggle('element__heart_active')
  }

  //Удаляем карточку
  _clickDeleteInCard() {
    this._deleteElement.closest('.element').remove()
    this._deleteElement = null;
  }

  //Клик на картинку увеличит её
  _clickZoomInImageToCard = () => {
    this._openImgPopup(this._dataCard)
  }

  //массив слушателей
  _setEventListeners() {
    this._likeElement.addEventListener('click', () => this._clickLikeInCard())
    this._deleteElement.addEventListener('click', () => this._clickDeleteInCard())
    this._imageElement.addEventListener('click', this._clickZoomInImageToCard)
  }
}