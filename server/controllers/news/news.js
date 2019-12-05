import mongoose from 'mongoose';
import { validateData } from './utils';
import { requiredNewsFields } from '../../models/News/constants'

import { News } from '../../models/News/News';


import mockNews from '../../mocks/news';

export const getNews = (req, res) => {
    News
        .find()
        .exec()
        .then(data => {
            if (data.length) {
                console.log('Collection length :: ', data.length);
                res.status(200).json(data);
            } else {
                res.status(404).json({
                    message: 'No entries found'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
};

export const postNew = (req, res) => {
    const { data } = req.body;

    if(!validateData(data, requiredNewsFields)) {
        res.status(400).json({
            message: 'Bad request: uncorrected fields',
            data,
        });
    };

    const article = new News({
        _id: new mongoose.Types.ObjectId(),
        category: data.category,
        country: data.country,
        description: data.description,
        id: data.id,
        language: data.language,
        name: data.name,
        url: data.url,
    });

    article
        .save()
        .then(data => {
            res.status(200).json({
                message: 'Added next news article to DB',
                data,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
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
