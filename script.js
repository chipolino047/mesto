let pen = document.querySelector('.border-pen');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-img');

function open() {
    popup.classList.add('popup_open');
}

pen.addEventListener('click', open);


function close() {
    popup.classList.remove('popup_open');
}

popupClose.addEventListener('click', close);




let formElement = document.querySelector('.form');
let nameInput = document.querySelector("input[name='name']");
let jobInput = document.querySelector("input[name='description']");
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');
let closeAndSave = document.querySelector('.form__button');

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
}

function closePopup() {
    popup.classList.add('popup_close')
}

formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', closePopup);
