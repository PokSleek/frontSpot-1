import Item from '../Item/Item';

import './Wrapper.scss';

const blockName = 'wrapper';

export class Wrapper extends Item {
    constructor(element, elementBlockName = element.fieldName, description = element.description) {
        super('div');
        this.addClass(blockName);

        this.description = Item.addItem('p', `${blockName}__description`, this.element);
        this.description.setInnerText(description.toUpperCase());

        this.wrappedElement = element;
        element.mount(this.element);
    }
}
