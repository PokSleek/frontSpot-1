import Item from '../components/baseComponents/Item/Item';

export class ErrorHandler {
    constructor() {
        if (!ErrorHandler.instance) {
            this.log = [];
            ErrorHandler.instance = this;
        }

        return ErrorHandler.instance;
    }

    addError = err => {
        this.log = [err, ...this.log];
        return this;
    }

    logErrors = () => this.log.forEach(error => console.log(error));

    getLastError = () => this.log[0];

    showLastError = () => {
        this.container = new Item('div');
        this.container.addClass('error__container');
        this.container.setInnerText(this.getLastError());
        return this.container;
    }
}
