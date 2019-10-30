export const newsApi = {
    url: 'https://newsapi.org',
    apiKey: '1266eb52a4c64e3b88d14bbb2c0423f3',
    endPoints: {
        topHeadlines: '/v2/top-headlines',
        everything: '/v2/everything',
        sources: '/v2/sources',
    },
    requestParameters: {
        country: ['ae', 'ar', 'bg', 'br', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ph', 'ru', 'tw', 'ua', 'us'],
        category: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
        pageSize: [5, 10, 15, 20]
    }
};

export const defaultUrl = newsApi.url;
export const defaultApiKey = newsApi.apiKey;
export const defaultEndPoint = newsApi.endPoints.topHeadlines;
export const defaultQueryParams = { country: 'us', pageSize: 10 };
