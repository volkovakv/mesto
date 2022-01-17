export default class Card {
  constructor(data, userId, cardTemplate, { handleCardClick, deleteCard, handleLikeClick }) {
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = userId;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
    this._handleLikeClick = handleLikeClick;
  }

  //шаблон карточки
  _getTemplate() {
    this._element = document
      .querySelector(this._cardTemplate)
      .content.querySelector('.element')
      .cloneNode(true);
    return this._element;
  }

  //формирование карточки
  generateCard() {
    this._element = this._getTemplate();
    const elementPhoto = this._element.querySelector('.element__photo');
    if (this._userId != this._cardOwnerId) {
      this._element.querySelector('.element__trash').remove();
    }
    this._element.querySelector('.element__likes-amount').textContent = this._likes.length;
    this._setEventListeners();
    elementPhoto.src = this._link;
    elementPhoto.alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    return this._element;
  }

  //постановка лайка
  setLike() {
    this._element.querySelector('.element__heart').classList.add('element__heart_active');
    this.isLiked = true;
  }

  //снятие лайка
  unsetLike() {
    this._element.querySelector('.element__heart').classList.remove('element__heart_active');
    this.isLiked = false;
  }

  //проверка автора лайка
  _checkUserLike() {
    return this._likes.some((item) => item._id === this._currentUserId);
  }

  //проверка состояние лайка
  _toggleLikeState() {
    if (this._checkUserLike()) {
      this.setLike();
    } else {
      this.unsetLike();
    }
  }

  //подсчет лайков
  likesCounter(data) {
    this._element.querySelector('.element__likes-amount').textContent = data.length;
  }

  _setEventListeners() {
    this._element.querySelector('.element__heart').addEventListener('click', () => {
      this._handleLikeClick(this._cardId)
    });

    if (this._userId === this._cardOwnerId) {
      this._element.querySelector('.element__trash').addEventListener('click', () => {
        this._deleteCard(this._element, this._cardId);
      });
    };

    this._element.querySelector('.element__photo').addEventListener('click', () => this._handleCardClick());
  }
}