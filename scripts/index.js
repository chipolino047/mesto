const buttonPopup = document.querySelector('.profile__button-pen');
const popup = document.querySelector('.popup-profile');
const popupImgClose = document.querySelector('.popup__close-img');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__text_line_title');
const jobInput = document.querySelector('.form__text_line_description');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const buttonAddImg = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup__add-img');
const closeAddImg = document.querySelector('#close-img-popup');
const nameInputValue = document.querySelector('.form__text_value-name');
const linkInputValue = document.querySelector('.form__text_value-link');
const formAddCards = document.querySelector('.form__add-img');
const popupCloseProfile = document.querySelector('#popup-close-profile');
const popupCloseFigure = document.querySelector('#popup-close-figure');
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
  
  const templateElement = document.querySelector('#cards').content;
  const sectionElements = document.querySelector('.elements');
  const popupImg = document.querySelector('.popup-img');
  const bigImage = document.querySelector('.popup__figure-img');
  const bigText = document.querySelector('.popup__figure-text');

//функция открытия попапа с профилем
function open(object) {
    object.classList.add('popup_opened');
};

//фукнция закрытия попапа с профилем
function close(object) {
    object.classList.remove('popup_opened');
};

//функция изменения профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    close(popup);
};

//Функция добавления/удаления карточек и лайков
function addCards(object) {
  const itemElement = templateElement.querySelector('.element').cloneNode(true);
  const likeElement = itemElement.querySelector('.element__heart');
  const imageElement = itemElement.querySelector('.element__img');
  const textElement = itemElement.querySelector('.element__text');
  const buttonDelete = itemElement.querySelector('.element__delete');
  imageElement.src = object.link;
  textElement.textContent = object.name;
  function openImgPopup(src, title) {
    bigImage.src = src;
    bigImage.alt = title;
    bigText.textContent = title;
    open(popupImg);
  } 
  imageElement.addEventListener('click', () => openImgPopup(object.link, object.name));
  buttonDelete.addEventListener('click', () => {
    const deleteCard = buttonDelete.closest('.element');
    deleteCard.remove()
  })
  likeElement.addEventListener('click', () => likeElement.classList.toggle('element__heart_active'));
  return itemElement;
}

initialCards.forEach(item => {
  const card = addCards(item);
  sectionElements.prepend(card);
});


formAddCards.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardsItem = {name: nameInputValue.value, link: linkInputValue.value};
  const card = addCards(cardsItem);
  sectionElements.prepend(card);
  close(popup)
});

popupCloseFigure.addEventListener('click', () => close(popupImg));
popupCloseProfile.addEventListener('click', () => close(popup));
buttonPopup.addEventListener('click', () => {open(popup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileText.textContent;});
popupImgClose.addEventListener('click', close);
formElement.addEventListener('submit', handleFormSubmit);
buttonAddImg.addEventListener('click', () => open(popupAdd));
closeAddImg.addEventListener('click', () => close(popupAdd));