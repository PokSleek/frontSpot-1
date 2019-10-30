import Item from '../baseComponents/Item/Item';
import { Article } from '../Article/Ariticle';

import './NewsCreator.scss';

const blockName = 'news_creator'

export class NewsCreator extends Item {
    constructor(filters = [], getData = (() => ([]))) {
        super('div');
        this.addClass(blockName);

        this.getData = getData;

        this.filtersWrapper = Item.addItem('div', `${blockName}__filters_wrapper`, this.element);

        this.filters = filters.map(wrappedFilter => wrappedFilter.wrappedElement);
        this.wrappedFilters = filters;
        this.wrappedFilters.forEach(wrappedFilter => wrappedFilter.mount(this.filtersWrapper.element));

        this.button = Item.addItem('button', `${blockName}__button`, this.element);
        this.button.setInnerText('FIND');

        this.articleContainer = Item.addItem('div', `${blockName}__article_container`, this.element);
        this.button.subscribe('click', this.generateArticles);
    }

     generateArticles = async () =>  {
        this.articleContainer.destructor();
        this.articleContainer = new Item('div');
        this.articleContainer.addClass(`${blockName}__article_container`);

        const data = await this.getData(this.getFiltersValue());

        data.forEach(item => {
            const article = new Article(item);
            article.mount(this.articleContainer.element);
        });

        this.articleContainer.mount(this.element);
    };

    getFiltersValue = () => this.filters.reduce((acc, filter) => 
    filter.element.value ?
    ({
        ...acc,
        [filter.fieldName]: filter.element.value,
    }) :
    acc, {});
}
