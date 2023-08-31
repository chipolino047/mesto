export {FormValidator}

class FormValidator {
    constructor(config, form) {
      this._inputSelector = config.inputSelector
      this._submitButtonSelector = config.submitButtonSelector
      this._inactiveButtonClass = config.inactiveButtonClass
      this._inputErrorClass = config.inputErrorClass
      this._errorClass = config.errorClass
      this._form = form
      this._button = form.querySelector(this._submitButtonSelector);
      this._inputList = form.querySelectorAll(this._inputSelector);
    }
  
    _showInputError(errorText, inputElement) {
      inputElement.classList.add(this._inputErrorClass)
      errorText.textContent = inputElement.validationMessage
      errorText.classList.add(this._errorClass)
    }  
  
    _hideInputError(errorText, inputElement) {
      inputElement.classList.remove(this._inputErrorClass)
      errorText.textContent = ''
    }
  
    _enableButton() {
      this._button.classList.remove(this._inactiveButtonClass)
      this._button.disabled = false
    }
  
    _disableButton() {
      this._button.classList.add(this._inactiveButtonClass)
      this._button.disabled = true
    }
  
    _hasInvalidInput() {
      return Array.from(this._inputList).some((inputList) => {
        return !inputList.validity.valid
      })
    }
  
    _toggleButtonState() {
      this._hasInvalidInput() ? this._disableButton(this._button) : this._enableButton()
    }
  
    _isValid(inputElement) {
      const errorText =  this._form.querySelector(`.${inputElement.id}-error`)
      inputElement.validity.valid ? this._hideInputError(errorText, inputElement) : this._showInputError(errorText, inputElement)
    }
  
    _setEventListener() {
      this._inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
          this._isValid(inputElement)
          this._toggleButtonState()
        })
      })
    }
  
    enableValidation() {
      this._setEventListener();
    }
  
    resetError() {
      this._inputList.forEach(inputElement => {
        const errorText =  this._form.querySelector(`.${inputElement.id}-error`)
        if (inputElement.validity.valid) {
          this._hideInputError(errorText, inputElement)
        }
      }),
      this._disableButton()
    }
  }