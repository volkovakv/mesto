import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputs = this._popupForm.querySelectorAll('.popup__text');
    this._submitCallback = submitCallback;
    this._submitButton = this._popupForm.querySelector('.popup__save-button');
  }

  //сбор данных полей формы
  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((input) => {
        inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  //функция закрытия попапа
  close() {
    super.close();
    this._popupForm.reset();
  }

  //статус при сохранении данных попапа
  submitButtonStatus(status) {
    if (status === true) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = 'Сохранить';
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }

}