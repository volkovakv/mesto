import Popup from './Popup.js';

export default class PopupConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  //колбэк для удаления карточки
  newSubmitCallback(action) {
    this._handlerSubmitForm = action;
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => this._handlerSubmitForm(evt));
    super.setEventListeners();
  }
}