const form = document.querySelector('.form');
const formInputTitle = form.querySelector('.form__text');
const formError = form.querySelector(`.${formInputTitle.id}-error`); 


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElements, inputElement, errorMessages) => {
    const errorElement = formElements.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add('form__text_type_error');
    errorElement.textContent = errorMessages;
    errorElement.classList.add('form__text-error_active');
  };

  //Функция, которая удаляет класс с ошибкой
  const hideInputError = (formElements, inputElement) => {
    const errorElement = formElements.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove('form__text_type_error');
    errorElement.classList.remove('form__text-error_active');
    errorElement.textContent = '';
  }

    //Функция проверки валидности
const isValid = (formElements, inputElement) => {
    if(!inputElement.validity.valid) {
        showInputError(formElements, inputElement, inputElement.validationMessage)
    } else {
        hideInputError(formElements, inputElement)
    }
  }

  //Функция валидации полей для деактивации/активации кнопки
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputList) => {
        return !inputList.validity.valid
    })
  }

  //функция активации/деактивации кнопки
  const toggleButtonState = (inputElement, buttonElement) => {
    if (hasInvalidInput(inputElement)) {
        buttonElement.disabled = true;
        buttonElement.classList.add('form__button_submit_inactiv')
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove('form__button_submit_inactiv')
    }
  }

  //Функция которая добавляет полям нужные обработчики событий
  const setEventListeners = (formElement) => {
    const StringInputText = Array.from(formElement.querySelectorAll('.form__text'));
    const buttonElement = formElement.querySelector('.form__button')

    toggleButtonState(StringInputText, buttonElement);

    StringInputText.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);

            toggleButtonState(inputElement, buttonElement);
        })
    })
  }

  //Функция которая перебирает все формы на странице
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'))

    formList.forEach((formElements) => {
        setEventListeners(formElements)
    })
  }





