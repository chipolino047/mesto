import {Card} from './scripts/components/Сards.js'
import {FormValidator} from './scripts/components/FormValidator.js'
import {initialCards} from './scripts/utils/utils.js'
import PopupWidthImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';
import UserInfo from './scripts/components/UserInfo.js';
import PopupWidthForm from './scripts/components/PopupWidthForm.js';
import Popup from './scripts/components/Popup.js';

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

const sectionElement = document.querySelector('.elements');
const popupImg = document.querySelector('.popup_img');
const bigImage = document.querySelector('.popup__figure-img');
const bigText = document.querySelector('.popup__figure-text');
const templateElement = '#cards';
const popupFigure = '.popup_img';
const sectionElementSelector = '.elements'
const profilePopupSelector = '.popup-profile'
const popupAddCardSelector = '.popup_add_img'

const configInfo = {
  profileName: '.profile__title',
  profileTextInfo: '.profile__text'
}

const config = {
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_submit_inactiv',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
}

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWidthImage(popupFigure)
popupImage.setEventListeners()

const profilePopup = new PopupWidthForm(profilePopupSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(profilePopup.getInputValue());
  profilePopup.close();
})
profilePopup.setEventListeners()
/**
 * 
 */

const popupAddCard = new PopupWidthForm(popupAddCardSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCard.getInputValue()));
  popupAddCard.close()
})
popupAddCard.setEventListeners()



const formValidatorProfile = new FormValidator(config, formPopupProfile)
formValidatorProfile.enableValidation()

const formValidatorAddCard = new FormValidator(config, formAddCards)
formValidatorAddCard.enableValidation()

//функция изменения профиля
function handleFormSubmitFormAdd(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupProfile);
};

const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = new Card(element, templateElement, popupImage.open);
    return card.createCard()
  }
}, sectionElementSelector)

section.addCardArr();

buttonPopupProfile.addEventListener('click', () => {
  formValidatorProfile.resetError()
  // nameInput.value = profileTitle.textContent;
  // jobInput.value = profileText.textContent;
  profilePopup.setInputValue(userInfo.getUserInfo())
  profilePopup.open()
});

buttonAddImg.addEventListener('click', () => {
  popupAddCard.open()
  formValidatorAddCard.resetError();
  formAddCards.reset();
});