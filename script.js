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




let heart = document.querySelectorAll('.element__heart');

function heartClick() {
    heart.classList.add('element__heart_active');
}
heart.addEventListener('click', heartClick);
