import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputs = this._popupForm.querySelectorAll('.popup__text');
    this._submitCallback = submitCallback;
  }

  //передаем форму bio   
  get PopupForm() {
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

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }
  
  
}