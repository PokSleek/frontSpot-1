import Item from '../../baseComponents/Item/Item';

import State from '../../../State';
import { filterPath } from '../../../State/paths';

import './Input.scss';

const blockName = 'wrapped_input';

export class Input extends Item {
    constructor(fieldName = 'input', description = fieldName, defaultValue = '') {
        super('input');
        this.addClass(blockName);

        this.element.name = fieldName;
        this.fieldName = fieldName;
        this.description = description;

        this.element.value = defaultValue;

        this.state = State.connectToField(filterPath);
        this.subscribe('input', this.handleChange);
    }

    handleChange = () => {
        this.state[this.fieldName] = this.element.value;
    }

    destructor = () => {
        this.state = null;
        super.destructor();
    }
}
