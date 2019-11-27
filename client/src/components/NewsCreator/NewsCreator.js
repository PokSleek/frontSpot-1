import Item from '../baseComponents/Item/Item';
import { Article } from '../Article/Ariticle';

import State from '../../State';
import { filterPath } from '../../State/paths';

import './NewsCreator.scss';


const blockName = 'news_creator'

export class NewsCreator extends Item {
    constructor(filters = [], getData = (() => ([]))) {
        super('div');
        this.addClass(blockName);

        this.getData = getData;

        this.filtersWrapper = new Item('div');
        this.filtersWrapper.addClass(`${blockName}__filters_wrapper`);

        this.wrappedFilters = filters;
        this.wrappedFilters.forEach(wrappedFilter => wrappedFilter.mount(this.filtersWrapper.element));

        this.button = new Item('button');
        this.button.addClass(`${blockName}__button`);
        this.button.setInnerText('FIND');
        this.button.subscribe('click', this.generateArticles);


        this.filtersWrapper.mount(this.element);
        this.button.mount(this.element);
        this.articleContainer = Item.addItem('div', `${blockName}__article_container`, this.element);
    }

    generateArticles = async () => {
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

    getFiltersValue = () => State.getState(filterPath);
}
