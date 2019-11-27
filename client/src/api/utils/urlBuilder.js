import { defaultUrl, defaultApiKey, defaultEndPoint, defaultQueryParams } from '../../constants/constants';

/**
 * Gets object and extracts every pair 'key - value' to query string
 * @param {Object} queryParams 
 * @returns {string} - 'country=us&'
 */
const queryParser = queryParams => {
    const entries = Object.entries(queryParams);
    return entries.reduce((acc, item) =>
        `${acc}${item.join('=')}&`,
        '')
};

/**
 * Builds final url
 * @param {Object} queryParams 
 * @param {string} endPoint 
 * @param {string} url 
 * @param {string} apiKey
 * @returns {string} - 'newsapi.org/v2/top-headlines?country=us&apiKey=1266eb52a4c64e3b88d14bbb2c0423f3';
 */
export const urlBuilder = (
    queryParams = defaultQueryParams,
    endPoint = defaultEndPoint,
    url = defaultUrl,
    apiKey = defaultApiKey
) => {
    const query = queryParser(queryParams);
    return `${url}${endPoint}?${query}apiKey=${apiKey}`
};
