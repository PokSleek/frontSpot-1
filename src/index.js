import { getNews } from './api/requests/getNews';
import { NewsCreator } from './components/NewsCreator/NewsCreator';
import { Selector } from './components/Filters/Selector/Selector';
import { Input } from "./components/Filters/Input/Input";
import { Wrapper } from "./components/baseComponents/Wrapper/Wrapper";
import { newsApi } from './constants/constants';

import Item from "./components/baseComponents/Item/Item";

const { country, category, pageSize } = newsApi.requestParameters;

import './reset.css';

function initialize() {
    const root = document.querySelector('#root');

    const errorButton = new Item('button');
    errorButton.setInnerText('SLOMAT');
    errorButton.element.onclick = () => import('./errorHandler/errorHandler').then(module => {
        const errors = module;
    });

    errorButton.mount(root);

    const filters = new NewsCreator(
        [
            new Wrapper(new Input('q', 'Search')),
            new Wrapper(new Selector(country, 'country', 'Country')),
            new Wrapper(new Selector(category, 'category', 'Category')),
            new Wrapper(new Selector(pageSize, 'pageSize', 'Page size')),
        ],
        getNews);
    filters.mount(root);
}

document.addEventListener('DOMContentLoaded', initialize);

function getComponent() {
    const element = document.createElement('div');

    return import('./errorHandler/errorHandler').then(({ default: _ }) => {
        const element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
}
