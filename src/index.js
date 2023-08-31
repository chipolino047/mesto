import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js'
import PopupWidthImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWidthForm from '../scripts/components/PopupWidthForm.js';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';
import Api from '../scripts/components/Api.js';
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
  formAddCards,
  popupAvatarSelector,
  popupDeleteSelector,
  avatarElement,
  avatarForm
} from '../scripts/utils/constants.js'
import '../pages/index.css'

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    authorization: 'f3240012-c6a2-4eeb-85ff-5bdece405691',
    'Content-Type': 'application/json'
  }
})

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWidthImage(popupFigure);

const deletePopupCard = new PopupDeleteCard(popupDeleteSelector, ({card, cardId}) => {
  api.deleteCard(cardId)
    .then(() => {
      card.removeCard()
    })
    .catch(error => console.log(`Ошибка при удалении карточки ${error}`))
    .finally()
  deletePopupCard.close()
})

const profilePopup = new PopupWidthForm(profilePopupSelector, (data) => {
  api.setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({ title: res.name, description: res.about, avatar: res.avatar });
    })
    .catch(error => console.log(`Ошибка при редактировании профиля ${error}`))
    .finally(() => profilePopup.setupDefaultText())
  profilePopup.close();
})

const popupAddCard = new PopupWidthForm(popupAddCardSelector, (data) => {
  Promise.all([api.getInfo(), api.addCard(data)])
    .then(([dataUser, dataCard]) => {
      dataCard.myId = dataUser._id;
      section.addItem(createNewCard(dataCard))
      popupAddCard.close()
    })
    .catch(error => console.log(`Ошибка при создании карточки ${error}`))
    .finally(() => popupAddCard.setupDefaultText())
})

const popupAvatar = new PopupWidthForm(popupAvatarSelector, (data) => {
  api.setNewAvatar(data)
  .then(res => {
    userInfo.setUserInfo({ title: res.name, description: res.about, avatar: res.avatar })
  })
  .catch(error => console.log(`Ошибка при изменении аватара ${error}`))
  .finally(() => popupAvatar.setupDefaultText())
  popupAvatar.close()
})

const FormValidatorAvatar = new FormValidator(config, avatarForm)
FormValidatorAvatar.enableValidation()

const formValidatorProfile = new FormValidator(config, formPopupProfile)
formValidatorProfile.enableValidation()

const formValidatorAddCard = new FormValidator(config, formAddCards)
formValidatorAddCard.enableValidation()

function createNewCard(element) {
  const card = new Card(element, templateElement, popupImage.open, deletePopupCard.open, (likeElement, cardId) => {
    if(likeElement.classList.contains('element__heart_active')) {
      api.deleteLike(cardId)
        .then(res => {
          card.toggleLike(res.likes);
        })
        .catch(error => console.log(`Ошибка при удалении лайка ${error}`))
    } else {
      api.addLike(cardId)
        .then(res => {
          card.toggleLike(res.likes)
        })
        .catch(error => console.log(`Ошибка при добавлении лайка ${error}`))
    }
  });
  return card.createCard()
}

const section = new Section({
  items: initialCards,
  renderer: (element) => {
    section.addItemAppend(createNewCard(element))
  }
}, sectionElementSelector);

popupImage.setEventListeners();
popupAddCard.setEventListeners();
profilePopup.setEventListeners();
popupAvatar.setEventListeners();
deletePopupCard.setEventListeners();


buttonPopupProfile.addEventListener('click', () => {
  formValidatorProfile.resetError()
  profilePopup.setInputValue(userInfo.getUserInfo())
  profilePopup.open()
});

buttonAddImg.addEventListener('click', () => {
  popupAddCard.open()
  formValidatorAddCard.resetError();
});



//Решить вопрос с валидацией формы. Если раскоментировать то будет ошибка
avatarElement.addEventListener('click', () => {
  FormValidatorAvatar.resetError();
  popupAvatar.open();
})

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(element => { element.myId = dataUser._id });
    userInfo.setUserInfo({ title: dataUser.name, description: dataUser.about, avatar: dataUser.avatar })
    section.renderItems(dataCard);
  })
  .catch(error => console.log(`Ошибка при редактировании профиля ${error}`))