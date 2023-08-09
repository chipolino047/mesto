export {initialCards, Card}

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  //создаём класс 
class Card {
  //Конструктор определяет данные карточки 
  constructor(dataCard, templateElement, openImgPopup) {
    this._dataCard = dataCard;
    this._link = dataCard.link;
    this._name = dataCard.name;
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
    this._listenerArray()
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
  _clickZoomInImageToCard() {
    this._openImgPopup(this._link, this._name)
  }

  //массив слушателей
  _listenerArray() {
    this._likeElement.addEventListener('click', () => this._clickLikeInCard())
    this._deleteElement.addEventListener('click', () => this._clickDeleteInCard())
    this._imageElement.addEventListener('click', () => this._clickZoomInImageToCard())
  }
}