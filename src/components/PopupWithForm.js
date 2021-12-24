import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputs = this._popupForm.querySelectorAll('.popup__text');
    this._submitCallback = submitCallback;
  }

  //передаем форму bio   
  getPopupForm() {
    return this._popupForm;
  }

  //сбор данных полей формы
  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((input) => {
        inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  //передаем поля инпут
  getFormInputValues() {
    return this._getInputValues();
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (event) => this._submitCallback(event));
    super.setEventListeners();
  }
  
}