export default class Section {
    constructor({ items, renderer }, containerSelector ) {
        this._items = items;
        this._renderer = renderer;
        this._containerElement = document.querySelector(containerSelector);
      }

      //отрисовка карточек
      renderItems() {
        this._items.forEach(item => {
          this._renderer(item);
        });
      }
      
      //добавление карточек
      addItem(item) {
        this._containerElement.prepend(item);
      }
}