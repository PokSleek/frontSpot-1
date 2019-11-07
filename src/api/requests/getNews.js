import { RequestFactory } from "../request-factory/RequestFactory";
import { urlBuilder } from '../utils/urlBuilder';
import { requestFactoryLogger } from "../utils/requestFactoryLogger";

import { defaultQueryParams } from '../../constants/constants'
import { requests } from "../request-factory/constants";

import { dinamicError } from '../../utils/dinamicError';


const { GET } = requests;

export const getNews = (queryParams, endPoint) => {
    const queryObject = {
        ...defaultQueryParams,
        ...queryParams,
    };
    const url = urlBuilder(queryObject, endPoint);
    return requestFactoryLogger(RequestFactory.createRequest(GET, url)).makeRequest()
        .then(res => res.json())
        .then(data => data.articles)
        .catch(err => {
            dinamicError(err);
            return [];
        });
};
