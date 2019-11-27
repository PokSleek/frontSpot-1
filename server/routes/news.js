import express from 'express';

import mockNews from '../mocks/news';


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(mockNews);
});

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Add next news',
        news: req.body,
    });
});

router.get('/:newsId', (req, res) => {
    const newsWithId = mockNews.sources.filter(news => news.id === req.params.newsId);
    res.status(200).json({
        sources: newsWithId
    });
});

router.patch('/:newsId', (req, res) => {
    res.status(200).json({
        message: `Patch news with id: ${req.params.newsId}`,
    });
});

router.delete('/:newsId', (req, res) => {
    res.status(200).json({
        message: `Delete news with id: ${req.params.newsId}`,
    });
});

export default router;
