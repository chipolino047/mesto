export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._initialCard = items;
        this.renderer = renderer;
    }

    renderItems(dataCard) {
        dataCard.forEach(element => {
            this.renderer(element)
        });
    }

    addItem(elementDom) {
        this._container.prepend(elementDom)
    }

    addItemAppend(elementDom) {
        this._container.append(elementDom)
    }
}