const buttonPopup = document.querySelector('.profile__button-pen');
const popup = document.querySelector('.popup');
const popupImgX = document.querySelector('.popup__close-img');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__text_line_title');
const jobInput = document.querySelector('.form__text_line_description');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const buttonAddImg = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('#popup-Add-Img');
const closeAddImg = document.querySelector('#close-img-popup');
const nameInputValue = document.querySelector('.form__text_value-name');
const linkInputValue = document.querySelector('.form__text_value-link');
const FormAddCards = document.querySelector('.form__add-img');
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

  initialCards.forEach (function addImg (item) { 
    const divElement = templateElement.querySelector('.element').cloneNode(true);

    divElement.querySelector('.element__img').src = item.link;
    divElement.querySelector('.element__text').textContent = item.name; 
    
     sectionElements.append(divElement);
    });

function open() {
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileText.textContent;
};

function close() {
    popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    close();
};

function popupOpen() {
    popupAdd.classList.add('popup_opened');
};

function popupClose() {
    popupAdd.classList.remove('popup_opened')
};

function addCards(evt) {
  evt.preventDefault();
  const itemElement = templateElement.querySelector('.element').cloneNode(true);
  itemElement.querySelector('.element__img').src = linkInputValue.value;
  itemElement.querySelector('.element__text').textContent = nameInputValue.value;

  sectionElements.prepend(itemElement);
  popupClose()
}

FormAddCards.addEventListener('submit', addCards);
buttonPopup.addEventListener('click', open);
popupImgX.addEventListener('click', close);
formElement.addEventListener('submit', handleFormSubmit);
buttonAddImg.addEventListener('click', popupOpen);
closeAddImg.addEventListener('click', popupClose);