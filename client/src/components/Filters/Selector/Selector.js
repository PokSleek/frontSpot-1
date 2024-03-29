import Item from '../../baseComponents/Item/Item';

import State from '../../../State';
import { filterPath } from '../../../State/paths';

import './Selector.scss';

const blockName = 'selector';

export class Selector extends Item {
    constructor(options = [], fieldName = 'selector', description = fieldName, defaultValue) {
        super('select');
        this.addClass(blockName);

        this.description = description;
        
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
