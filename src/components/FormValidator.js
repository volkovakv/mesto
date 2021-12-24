// ВАЛИДАЦИЯ ФОРМ
export class FormValidator {
  constructor(validClasses, formElement) {
    this._form = formElement;
    this._formSelector = validClasses.formSelector;
    this._inputSelector = validClasses.inputSelector;
    this._submitButtonSelector = validClasses.submitButtonSelector;
    this._inactiveButtonClass = validClasses.inactiveButtonClass;
    this._inputErrorClass = validClasses.inputErrorClass;
    this._errorClass = validClasses.errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

// Функция, которая добавляет инпуту класс с ошибкой
_showInputError = (inputElement) => {
  this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  this._errorElement.textContent = inputElement.validationMessage;
  this._errorElement.classList.add(this._errorClass);
};

// Функция, которая удаляет у инпута класс с ошибкой
_hideInputError = (inputElement) => {
  this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  this._errorElement.classList.remove(this._errorClass);
  this._errorElement.textContent = '';
}; 

// Функция, которая проверяет валидность заполнения поля
_isValid = (inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement);
  } else {
    this._hideInputError(inputElement);
  }
}; 

// Функция, которая проверяет наличие хотя бы одного невалидного поля
_hasInvalidInput = () => {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

//функция, которая меняет стиль кнопки "сохранить" при наличии хотя бы одного невалидного поля
toggleButtonState = () => {
  if (this._hasInvalidInput()) {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  } else {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled', false);
  }
};

//обработчик для всех полей
_setEventListeners = () => {
  //кнопка "Сохранить" неактивна
  this.toggleButtonState();
  // Обойдём все элементы полученной коллекции
  this._inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input и вызовем функцию isValid на каждый ввод символа
    inputElement.addEventListener('input', () => {
      this._isValid(inputElement);
      this.toggleButtonState();
    });
  });
}; 

//обработчик для всех форм
enableValidation() {
  this._setEventListeners();
  };
};

export const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_active'
};