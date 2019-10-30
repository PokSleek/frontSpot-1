import Item from '../../baseComponents/Item/Item';

import './Input.scss';

const blockName = 'wrapped_input';

export class Input extends Item {
    constructor(fieldName = '', description = fieldName, defaultValue = '') {
        super('input');
        this.addClass(blockName);

        this.element.name = fieldName;
        this.fieldName = fieldName;
        this.description = description;

        this.element.value = defaultValue;
    }
}