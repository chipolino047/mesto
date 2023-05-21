const buttonPopupProfile = document.querySelector('.profile__button-pen');
const popupProfile = document.querySelector('.popup-profile');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__text_line_title');
const jobInput = document.querySelector('.form__text_line_description');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const buttonAddImg = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_add_img');
const closePopupAddImg = document.querySelector('#popup-close-img');
const nameInputValue = document.querySelector('.form__text_value-name');
const linkInputValue = document.querySelector('.form__text_value-link');
const formAddCards = document.querySelector('.form_add_img');
const popupCloseProfile = document.querySelector('#popup-close-profile');
const popupCloseFigure = document.querySelector('#popup-close-figure');
const templateElement = document.querySelector('#cards').content;
const sectionElement = document.querySelector('.elements');
const popupImg = document.querySelector('.popup_img');
const bigImage = document.querySelector('.popup__figure-img');
const bigText = document.querySelector('.popup__figure-text');
const buttonFormReset = document.querySelector('form__button_reset');

//функция открытия попапа с профилем
function openPopup(object) {
  object.classList.add('popup_opened');
};

//фукнция закрытия попапа с профилем
function closePopup(object) {
  object.classList.remove('popup_opened');
};

//функция изменения профиля
function handleFormSubmitFormAdd(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupProfile);
};

//Функция добавления/удаления карточек и лайков
function addCards(object) {
  const itemElement = templateElement.querySelector('.element').cloneNode(true);
  const likeElement = itemElement.querySelector('.element__heart');
  const imageElement = itemElement.querySelector('.element__img');
  const textElement = itemElement.querySelector('.element__text');
  const buttonDelete = itemElement.querySelector('.element__delete');
  imageElement.src = object.link;
  imageElement.alt = object.name;
  textElement.textContent = object.name;
  imageElement.addEventListener('click', () => openImgPopup(object.link, object.name));
  buttonDelete.addEventListener('click', () => {
    const deleteCard = buttonDelete.closest('.element');
    deleteCard.remove()
  })
  likeElement.addEventListener('click', () => likeElement.classList.toggle('element__heart_active'));
  return itemElement;
}

function openImgPopup(src, title) {
  bigImage.src = src;
  bigImage.alt = title;
  bigText.textContent = title;
  openPopup(popupImg);
}

initialCards.forEach(item => {
  const card = addCards(item);
  sectionElement.prepend(card);
});


formAddCards.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardsItem = {
    name: nameInputValue.value,
    link: linkInputValue.value
  };
  const card = addCards(cardsItem);
  sectionElement.prepend(card);
  closePopup(popupAdd);
  formAddCards.reset();
});

popupCloseFigure.addEventListener('click', () => closePopup(popupImg));
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));
buttonPopupProfile.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileText.textContent;
});
popupCloseFigure.addEventListener('click', () => closePopup(popupImg));
formElement.addEventListener('submit', handleFormSubmitFormAdd);
buttonAddImg.addEventListener('click', () => openPopup(popupAdd));
closePopupAddImg.addEventListener('click', () => closePopup(popupAdd));