// Функция, которая добавляет класс с ошибкой
const showInputError = (formElements, inputElement, errorMessages, config) => {
  const errorElement = formElements.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessages;
  errorElement.classList.add(config.errorClass);
};

//Функция, которая удаляет класс с ошибкой
const hideInputError = (formElements, inputElement, config) => {
  const errorElement = formElements.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
}

//Функция проверки валидности
const isValid = (formElements, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElements, inputElement, inputElement.validationMessage, config)
  } else {
    hideInputError(formElements, inputElement, config)
  }
}

//Функция валидации полей для деактивации/активации кнопки
const hasInvalidInput = (inputList) => {
  return inputList.some((inputList) => {
    return !inputList.validity.valid
  })
}

//функция выключения кнопки
const disableButton = (buttonElement, config) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
}

//Функция включения кнопки
const enableButton = (buttonElement, config) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
}

//функция переключения состояние кнопки
const toggleButtonState = (inputElement, buttonElement, config) => {
  if (hasInvalidInput(inputElement)) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
}

//Функция которая добавляет полям нужные обработчики событий
const setEventListeners = (formElement, config) => {
  const stringInputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector)

  toggleButtonState(stringInputList, buttonElement, config);

  stringInputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);

      toggleButtonState(stringInputList, buttonElement, config);
    })
  })
}

//Функция которая перебирает все формы на странице
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))

  formList.forEach((formElement) => {
    setEventListeners(formElement, config)
  })
}

const config = ({
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_submit_inactiv',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
})

enableValidation(config);






