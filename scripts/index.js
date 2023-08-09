import {initialCards, Card} from './cards.js'
import {FormValidator} from './FormValidator.js'

const buttonPopupProfile = document.querySelector('.profile__button-pen');
const popupProfile = document.querySelector('.popup-profile');
const formPopupProfile = document.querySelector('.form_popup_profile');
const nameInput = document.querySelector('.form__text_type_title');
const jobInput = document.querySelector('.form__text_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const buttonAddImg = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_add_img');
const buttonSubmitAdd = popupAdd.querySelector('.form__button');
const closePopupAddImg = document.querySelector('#popup-close-img');
const nameInputValue = document.querySelector('.form__text_type_add-name');
const linkInputValue = document.querySelector('.form__text_type_link');
const formAddCards = document.querySelector('.form_add_img');
const popupCloseProfile = document.querySelector('#popup-close-profile');
const popupCloseFigure = document.querySelector('#popup-close-figure');
const templateElement = '#cards';
const sectionElement = document.querySelector('.elements');
const popupImg = document.querySelector('.popup_img');
const bigImage = document.querySelector('.popup__figure-img');
const bigText = document.querySelector('.popup__figure-text');

const config = {
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_submit_inactiv',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
}

const formValidatorProfile = new FormValidator(config, formPopupProfile)
formValidatorProfile.enableValidation()

const formValidatorAddCard = new FormValidator(config, formAddCards)
formValidatorAddCard.enableValidation()


//Функция закрытия попапа кликом на оверлей
const closePopupByOverlayClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(evt.currentTarget)
    };
  };

//Функция закрытия попапа нажатием Esc
const closePopupByEsc = (evt) => {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'))
    }
  }

//Универсальная функция открытия попапа
function openPopup(object) {
  object.classList.add('popup_opened');

  //Функция на закрытие попапа кликом на оверлей
  object.addEventListener('click', closePopupByOverlayClick);

  //Функция закрытия попапа нажатием ESC 
  document.addEventListener('keydown', closePopupByEsc);
};

//Универсальная функция закрытия попапа
function closePopup(object) {
  object.classList.remove('popup_opened');

  object.removeEventListener('click', closePopupByOverlayClick);

  document.removeEventListener('keydown', closePopupByEsc);
};

//функция изменения профиля
function handleFormSubmitFormAdd(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupProfile);
};


//Функция добавления/удаления карточек и лайков
function createCard(item) {
  const card = new Card(item, templateElement, openImgPopup);
  const cardElement = card.createCard()
  return cardElement;
}

//Функция открывает картинку при нажатии на неё
function openImgPopup(src, title) {
  bigImage.src = src;
  bigImage.alt = title;
  bigText.textContent = title;
  openPopup(popupImg);
}

initialCards.forEach(item => {
  sectionElement.prepend(createCard(item));
});


formAddCards.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardsItem = {
    name: nameInputValue.value,
    link: linkInputValue.value
  };
  sectionElement.prepend(createCard(cardsItem));
  closePopup(popupAdd);
  formAddCards.reset();
  // disableButton(buttonSubmitAdd, config);
});

popupCloseFigure.addEventListener('click', () => closePopup(popupImg));
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));
buttonPopupProfile.addEventListener('click', () => {
  formValidatorProfile.resetError()
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileText.textContent;
});
popupCloseFigure.addEventListener('click', () => closePopup(popupImg));
formPopupProfile.addEventListener('submit', handleFormSubmitFormAdd);
buttonAddImg.addEventListener('click', () => {
  openPopup(popupAdd);
  formValidatorAddCard.resetError();
  formAddCards.reset();
});
closePopupAddImg.addEventListener('click', () => closePopup(popupAdd));