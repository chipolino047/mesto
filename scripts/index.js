let pen = document.querySelector('.profile__button-pen');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-img');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__text_line_title');
let jobInput = document.querySelector('.form__text_line_description');
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');

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


pen.addEventListener('click', open);
popupClose.addEventListener('click', close);
formElement.addEventListener('submit', handleFormSubmit);
