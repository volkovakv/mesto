export default class Section {
    constructor({ renderItems }, containerSelector ) {
        this._renderer = renderItems;
        this._containerElement = document.querySelector(containerSelector);
      }

      //отрисовка карточек
      renderItems(items) {
        items.forEach((item) => {
          this._renderer(item);
        });
      }
      
      //добавление новых карточек
      prependAddItem(element) {
        this._containerElement.prepend(element);
      }

      //добавление карточек при отрисовке
      appendAddItem(element) {
        this._containerElement.append(element);
      }
}