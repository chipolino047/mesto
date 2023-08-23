export {
  initialCards,
  buttonPopupProfile,
  buttonAddImg,
  templateElement,
  popupFigure,
  sectionElementSelector,
  profilePopupSelector,
  popupAddCardSelector,
  config,
  configInfo,
  formPopupProfile,
  formAddCards
}

const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const buttonPopupProfile = document.querySelector('.profile__button-pen');
const buttonAddImg = document.querySelector('.profile__button-add');
const formPopupProfile = document.querySelector('.form_popup_profile');
const formAddCards = document.querySelector('.form_add_img');

const templateElement = '#cards';
const popupFigure = '.popup_img';
const sectionElementSelector = '.elements'
const profilePopupSelector = '.popup-profile'
const popupAddCardSelector = '.popup_add_img'

const config = {
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_submit_inactiv',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
}

const configInfo = {
  profileName: '.profile__title',
  profileTextInfo: '.profile__text'
}