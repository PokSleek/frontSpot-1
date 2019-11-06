import { getNews } from './api/requests/getNews';
import { NewsCreator } from './components/NewsCreator/NewsCreator';
import { Selector } from './components/Filters/Selector/Selector';
import { Input } from "./components/Filters/Input/Input";
import { Wrapper } from "./components/baseComponents/Wrapper/Wrapper";
import { newsApi, defaultQueryParams } from './constants/constants';

import Item from "./components/baseComponents/Item/Item";

const { country, category, pageSize } = newsApi.requestParameters;

import './reset.css';

function initialize() {
    const root = document.querySelector('#root');

    const errorButton = new Item('button');
    errorButton.setInnerText('SLOMAT');
    errorButton.element.onclick = () => import('./errorHandler/errorHandler').then(module => {
        console.log(module);
    });
    errorButton.mount(root);

    const filters = new NewsCreator(
        [
            new Wrapper(new Input('q', 'Search')),
            new Wrapper(new Selector(country, 'country', 'Country', defaultQueryParams.country)),
            new Wrapper(new Selector(category, 'category', 'Category')),
            new Wrapper(new Selector(pageSize, 'pageSize', 'Page size', defaultQueryParams.pageSize)),
        ],
        getNews);
    filters.mount(root);
}

document.addEventListener('DOMContentLoaded', initialize);
