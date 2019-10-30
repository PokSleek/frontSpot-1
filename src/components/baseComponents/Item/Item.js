export default class Item {
    constructor(tagName) {
        this.element = document.createElement(tagName);
        this.subs = [];
    }

    static addItem(tagName, style, parent) {
        const element = new Item(tagName);
        element.addClass(style);
        element.mount(parent);
        return element;
    }

    mount(parent = document.body) {
        this.parent = parent;
        parent.appendChild(this.element);
    }

    subscribe(event, func) {
        this.subs.push({ event, func });
        this.element.addEventListener(event, func);
    }

    unsubscribe(event, func) {
        this.element.removeEventListener(event, func);
    }

    setInnerText(text) {
        this.element.innerText = text;
    }

    addInnerText(text) {
        this.element.innerText = this.element.innerText + text;
    }

    addClass(...className) {
        className.forEach(e => this.element.classList.add(e));
    }

    removeClass(...className) {
        className.forEach(e => this.element.classList.remove(e));
    }

    destructor() {
        this.parent.removeChild(this.element);
        this.parent = null;

        this.subs.forEach(e => this.unsubscribe(e.event, e.func));

        this.subs = [];
    }
}