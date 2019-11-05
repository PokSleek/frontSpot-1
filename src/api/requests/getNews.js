import { RequestFactory } from "../request-factory/RequestFactory";
import { urlBuilder } from '../utils/urlBuilder';

import { defaultQueryParams } from '../../constants/constants'
import { requests } from "../request-factory/constants";

const { GET } = requests;

export const getNews = (queryParams, endPoint) => {
    const queryObject = {
        ...defaultQueryParams,
        ...queryParams,
    };
    const url = urlBuilder(queryObject, endPoint);
    return RequestFactory.createRequest(GET, url).makeRequest()
        .then(res => res.articles)
        .catch(err => {
            console.log(err);
            return [];
        });
};
