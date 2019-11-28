import remove from 'lodash/remove';
import find from 'lodash/find';
import includes from 'lodash/includes';

import { newsMock } from '../../mocks/newss';

const news = [ ...newsMock ];

export const getNews = (req, res) => {
    res.status(200).json(news);
};

export const postNew = (req, res) => {
    const { article } = req.body;

    try {
        news.push(article);

        res.status(200).json({
            message: 'Add next article',
            article,
        });
    } catch (e) {
        res.status(500).json({
            message: `Internal server error`,
        });
    }
};

export const getNewById = (req, res) => {
    const { newsId } = req.params;
    try {
        const article = find(news, article => article.id === newsId);
        if (article) {
            res.status(200).json({
                message: `Article with given id: ${newsId}`,
                article,
            });
        } else {
            res.status(200).json({
                message: `There are no articles with given id: ${newsId}`,
            })
        }
    } catch (e) {
        res.status(500).json({
            message: `Internal server error`,
        });
    }
};

export const patchNewById = (req, res) => {
    const { newsId } = req.params;
    const { article } = req.body;
    try {
        const isIncludes = includes(news, article => article.id === newsId);
        if (isIncludes) {
            remove(news, article => article.id === newsId);
            news.push(article);
            res.status(200).json({
                message: `Article was updated with given id: ${newsId}`,
                article,
            });
        } else {
            res.status(200).json({
                message: `There are no articles with given id: ${newsId}`,
            })
        }
    } catch (e) {
        res.status(500).json({
            message: `Internal server error`,
        });
    }
};

export const deleteNew = (req, res) => {
    const { newsId } = req.params;
    try {
        const isIncludes = includes(news, article => article.id === newsId);
        if (isIncludes) {
            remove(news, article => article.id === newsId);
            res.status(200).json({
                message: `Article was deleted with given id: ${newsId}`,
            });
        } else {
            res.status(200).json({
                message: `There are no articles with given id: ${newsId}`,
            })
        }
    } catch (e) {
        res.status(500).json({
            message: `Internal server error`,
        });
    }
};
