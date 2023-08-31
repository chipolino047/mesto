export {Card}

class Card {
  //Конструктор определяет данные карточки 
  constructor(dataCard, templateElement, openImgPopup, openDeletePopup, changeLike) {
    // console.log(dataCard)
    this._dataCard = dataCard;
    this._link = dataCard.link;
    this._name = dataCard.name;
    this._myId = dataCard.myId;
    this._likes = dataCard.likes;
    this._likesLength = dataCard.likes.length;
    this._ownerId = dataCard.owner._id;
    this._changeLike = changeLike;
    this._cardId = dataCard._id;
    this._templateElement = templateElement;
    this._openImgPopup = openImgPopup;
    this._openDeletePopup = openDeletePopup;
    this._getElement = document.querySelector(this._templateElement).content.querySelector('.element').cloneNode(true);
    this._imageElement = this._getElement.querySelector('.element__img');
    this._textElement = this._getElement.querySelector('.element__text');
    this._likeElement = this._getElement.querySelector('.element__heart');
    this._deleteElement = this._getElement.querySelector('.element__delete');
    this._counter = this._getElement.querySelector('.element__like-count');
  }

  _checkMyIdButtonDelete() {
    this._myId === this._ownerId ? this._deleteElement.style.display = 'block' : this._deleteElement.style.display = 'none'
  }

  _checkLikeStatus() {
    this._likes.forEach(item => {
      if(item._id === this._myId) {
        this._likeElement.classList.add('element__heart_active')
        return 
      }
    });
    this._counter.textContent = this._likesLength;
  }

  toggleLike(likes) {
    this._likeElement.classList.toggle('element__heart_active');
    this._counter.textContent = likes.length
  }

  //Определяет элементы темплейта и возвращает готовый метод
  createCard() {
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._checkLikeStatus()
    this._checkMyIdButtonDelete();
    this._setEventListeners();
    return this._getElement;
  }

  //метод отвечающий за лайки
  _clickLikeInCard = () => {
    this._changeLike(this._likeElement, this._cardId)
  }

  //Удаляем карточку
  _clickDeleteInCard() {
    this._openDeletePopup({card: this, cardId: this._cardId})
  }

  removeCard() {
    this._deleteElement.remove()
    this._deleteElement = null;
  }

  //Клик на картинку увеличит её
  _clickZoomInImageToCard = () => {
    this._openImgPopup(this._dataCard)
  }

  //массив слушателей
  _setEventListeners() {
    this._likeElement.addEventListener('click', this._clickLikeInCard)
    this._deleteElement.addEventListener('click', () => this._clickDeleteInCard())
    this._imageElement.addEventListener('click', this._clickZoomInImageToCard)
  }
}