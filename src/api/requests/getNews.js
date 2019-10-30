import { fetchData } from '../utils/fetchData';
import { urlBuilder } from '../utils/urlBuilder';
import { defaultQueryParams } from '../../constants/constants'

export const getNews = (queryParams, endPoint) => {
    const queryObject = {
        ...defaultQueryParams,
        ...queryParams,
    }
    const url = urlBuilder(queryObject, endPoint);
    const response = fetchData(url)
        .then(res => res.articles)
        .catch(err => {
            console.log(err);
            return [];
        });
    return response;
};
