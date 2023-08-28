import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js'
import PopupWidthImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWidthForm from '../scripts/components/PopupWidthForm.js';
import {
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
} from '../scripts/utils/constants.js'
import '../pages/index.css'

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWidthImage(popupFigure)

const profilePopup = new PopupWidthForm(profilePopupSelector, (data) => {
  userInfo.setUserInfo(data);
  profilePopup.close();
})

const popupAddCard = new PopupWidthForm(popupAddCardSelector, (data) => {
  section.addItem(section.renderer(data));
  popupAddCard.close()
})

const formValidatorProfile = new FormValidator(config, formPopupProfile)
formValidatorProfile.enableValidation()

const formValidatorAddCard = new FormValidator(config, formAddCards)
formValidatorAddCard.enableValidation()

const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = new Card(element, templateElement, popupImage.open);
    return card.createCard()
  }
}, sectionElementSelector);

section.renderItems();

popupImage.setEventListeners();
popupAddCard.setEventListeners();
profilePopup.setEventListeners()


buttonPopupProfile.addEventListener('click', () => {
  formValidatorProfile.resetError()
  profilePopup.setInputValue(userInfo.getUserInfo())
  profilePopup.open()
});

buttonAddImg.addEventListener('click', () => {
  popupAddCard.open()
  formValidatorAddCard.resetError();
});