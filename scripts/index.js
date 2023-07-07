const buttonPopupProfile = document.querySelector('.profile__button-pen');
const popupProfile = document.querySelector('.popup-profile');
const formPopupProfile = document.querySelector('.form_popup_profile');
const nameInput = document.querySelector('.form__text_type_title');
const jobInput = document.querySelector('.form__text_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const buttonAddImg = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_add_img');
const closePopupAddImg = document.querySelector('#popup-close-img');
const nameInputValue = document.querySelector('.form__text_type_add-name');
const linkInputValue = document.querySelector('.form__text_type_link');
const formAddCards = document.querySelector('.form_add_img');
const popupCloseProfile = document.querySelector('#popup-close-profile');
const popupCloseFigure = document.querySelector('#popup-close-figure');
const templateElement = document.querySelector('#cards').content;
const sectionElement = document.querySelector('.elements');
const popupImg = document.querySelector('.popup_img');
const bigImage = document.querySelector('.popup__figure-img');
const bigText = document.querySelector('.popup__figure-text');

//Функция закрытия попапа кликом на оверлей
const closePopupByOverlayClick = (object) => {
  object.addEventListener('click', (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(evt.currentTarget)
    };
  });
}

//Функция закрытия попапа нажатием Esc
const closePopupByEsc = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'))
    }
  })
}

//Универсальная функция открытия попапа
function openPopup(object) {
  object.classList.add('popup_opened');

  //Функция на закрытие попапа кликом на оверлей
  closePopupByOverlayClick(object);

  //Функция закрытия попапа нажатием ESC 
  closePopupByEsc();
};

//Универсальная функция закрытия попапа
function closePopup(object) {
  object.classList.remove('popup_opened');
  closePopupByOverlayClick(object);
  closePopupByEsc();
};

//функция изменения профиля
function handleFormSubmitFormAdd(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupProfile);
};

//Функция добавления/удаления карточек и лайков
function createCard(object) {
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
    const itemElement = buttonDelete.closest('.element');
    itemElement.remove()
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
  const card = createCard(item);
  sectionElement.prepend(card);
});


formAddCards.addEventListener('submit', (evt, buttonElement) => {
  evt.preventDefault();
  const cardsItem = {
    name: nameInputValue.value,
    link: linkInputValue.value
  };
  const card = createCard(cardsItem);
  sectionElement.prepend(card);
  closePopup(popupAdd);
  formAddCards.reset();
  disabledButton(buttonElement, config);
});

popupCloseFigure.addEventListener('click', () => closePopup(popupImg));
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));
buttonPopupProfile.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileText.textContent;
});
popupCloseFigure.addEventListener('click', () => closePopup(popupImg));
formPopupProfile.addEventListener('submit', handleFormSubmitFormAdd);
buttonAddImg.addEventListener('click', () => openPopup(popupAdd));
closePopupAddImg.addEventListener('click', () => closePopup(popupAdd));