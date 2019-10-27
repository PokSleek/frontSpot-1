import { fetchData } from '../utils/fetchData';
import { urlBuilder } from '../utils/urlBuilder';

export const getNews = params => {
    const response = fetchData(urlBuilder(params))
        .then(res => res.articles)
        .catch(err => {
            console.log(err);
            return [];
        });
    return response;
};
