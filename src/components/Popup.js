export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    // функция для открытия попапа
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    } 
  
  // функция для закрытия попапа
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

      //функция для закрытия попапа по клику на esc
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
    };
  };

  // закрытие любого попапа крестиком и по оверлею
    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__close-button')) {
                this.close();
            }
        })
    }
}