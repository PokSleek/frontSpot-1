import Item from '../../baseComponents/Item/Item';

import './WrappedSelector.scss';

const blockName = 'wrapped_selector'

export class WrappedSelector extends Item {
    constructor(options = [], fieldName = '', description = fieldName) {
        super('select');
        this.addClass(blockName);

        this.wrapper = new Item('div');
        this.wrapper.addClass(`${blockName}__wrapper`);

        this.description = Item.addItem('p', `${blockName}__description`, this.wrapper.element);
        this.description.setInnerText(description);
        
        this.element.name = fieldName;

        this.fieldName = fieldName;
        this.optionsValues = options;

        this.options = options.map(value => {
            const option = new Item('option');
            option.addClass(`${blockName}__option`);
            option.setInnerText(value);
            option.element.value = value;
            option.mount(this.element);
            return option;
        });

        this.element.value = '';
        this.mount(this.wrapper.element);
    }
}