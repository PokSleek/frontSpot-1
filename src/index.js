import { getNews } from './api/requests/getNews';
import { NewsCreator } from './components/NewsCreator/NewsCreator';
import { WrappedSelector } from './components/Filters/WrappedSelector/WrappedSelector';
import { newsApi } from './constants/constants';

const { country, category, pageSize } = newsApi.requestParameters;

import './reset.css';

function initialize() {
    const root = document.querySelector('#root');

    const filters = new NewsCreator(
        [
            new WrappedSelector(country, 'country', 'Country'),
            new WrappedSelector(category, 'category', 'Category'),
            new WrappedSelector(pageSize, 'pageSize', 'Page size')
        ],
        getNews);
    filters.mount(root);
}

document.addEventListener('DOMContentLoaded', initialize);
