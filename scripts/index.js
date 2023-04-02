let buttonPopup = document.querySelector('.profile__button-pen');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-img');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__text_line_title');
let jobInput = document.querySelector('.form__text_line_description');
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');
let tyu = (1, 2, 3, 4)

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

  initialCards.forEach (function (item) { 
    const divElement = templateElement.querySelector('.element').cloneNode(true);

    divElement.querySelector('.element__img').src = item.link;
    divElement.querySelector('.element__text').textContent = item.name; 
    
     sectionElements.append(divElement);
    });

function open() {
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileText.textContent;
}

function close() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    close();
}


buttonPopup.addEventListener('click', open);
popupClose.addEventListener('click', close);
formElement.addEventListener('submit', handleFormSubmit);