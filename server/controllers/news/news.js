import mockNews from '../../mocks/news';

export const getNews = (req, res) => {
    res.status(200).json(mockNews);
};

export const postNew = (req, res) => {
    res.status(200).json({
        message: 'Add next news',
        news: req.body,
    });
};

export const getNewById = (req, res) => {
    const newsWithId = mockNews.sources.filter(news => news.id === req.params.newsId);
    res.status(200).json({
        sources: newsWithId
    });
};

export const patchNewById = (req, res) => {
    res.status(200).json({
        message: `Patch news with id: ${req.params.newsId}`,
    });
};

export const deleteNew = (req, res) => {
    res.status(200).json({
        message: `Delete news with id: ${req.params.newsId}`,
    });
};
