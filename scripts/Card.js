import { openPopup } from './index.js';

export default class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._imageName = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardTemplate)
      .content.querySelector('.element')
      .cloneNode(true);

    return this._element;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    return this._element;
  }

  // функция для лайка
  _like(evt) {
    evt.target.classList.toggle('element__heart_active');
  }
    
  //функция для удаления 
  _remove(evt) {
    evt.target.closest('.element').remove();
  }
    
  // функция открытия попапа zoom
  _openPhotoPopup(evt) {
    popupElementZoomContainerPic.src = evt.target.src;
    popupElementZoomContainerPic.alt = evt.target.alt;
    popupElementZoomContainerDescription.textContent = evt.target.alt;
    openPopup(popupElementZoom);
  };

  _setEventListeners() {
    //отображение лайка
    this._element.querySelector('.element__heart').addEventListener('click', (evt) => {
      this._like(evt)
    });

    //удаление карточки
    this._element.querySelector('.element__trash').addEventListener('click', (evt) => {
      this._remove(evt)
    });

    //открытие попапа с фото
    this._element.querySelector('.element__photo').addEventListener('click', (evt) => {
      this._openPhotoPopup(evt)
    });
  }
}