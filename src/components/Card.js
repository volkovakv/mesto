export default class Card {
  constructor(item, cardTemplate, handleCardClick) {
    this._name = item.name;
    this._link = item.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
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
    const elementPhoto = this._element.querySelector('.element__photo');
    this._setEventListeners();
    elementPhoto.src = this._link;
    elementPhoto.alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    return this._element;
  }

  // функция для лайка
  _like(evt) {
    evt.target.classList.toggle('element__heart_active');
  }
    
  //функция для удаления 
  _remove() {
    this._element.remove();
    this._element.null;
  }

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
    this._element.querySelector('.element__photo').addEventListener('click', () => this._handleCardClick());
  }
}