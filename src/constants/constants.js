export const newsApi = {
    url: 'https://newsapi.org',
    apiKey: '1266eb52a4c64e3b88d14bbb2c0423f3',
    endPoints: {
        topHeadlines: '/v2/top-headlines',
        everything: '/v2/everything',
        sources: '/v2/sources',
    },
    countries: {
        us: 'us',
        ru: 'ru',
    },
};

export const defaultUrl = newsApi.url;
export const defaultApiKey = newsApi.apiKey;
export const defaultEndPoint = newsApi.endPoints.topHeadlines;
export const defaultQueryParams = { country: newsApi.countries.us };