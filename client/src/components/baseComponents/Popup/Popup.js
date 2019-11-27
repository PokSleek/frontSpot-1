import Item from '../Item/Item';

import './Popup.scss';

const blockName = 'popup';

export class Popup extends Item {
    constructor(element = new Item('div'), isActive = false, isOneTimeToggle = false) {
        super('div');
        this.addClass(blockName);

        this.active = isOneTimeToggle ? true : isActive;
        this.active ? this.addClass('show') : null;

        this.element.onclick = isOneTimeToggle ? this.oneTimeToggle : this.toggle;

        element.mount(this.element);
    }

    oneTimeToggle = () => {
        this.destructor();
    }
    

    toggle = () => {
        this.active ? this.removeClass('show') : this.addClass('show');
        this.active = !this.active;
    }
}
