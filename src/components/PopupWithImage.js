import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
    this._image = this._popupElement.querySelector('.popup__pic');
    this._imageName = this._popupElement.querySelector('.popup__description');
  }  
  
  open(imageLink, imageName) {
      this._image.src = imageLink;
      this._image.alt = imageName;
      this._imageName.textContent = imageName;
      super.open();
    }
  }