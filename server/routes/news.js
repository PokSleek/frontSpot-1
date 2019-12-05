import express from 'express';

import {
    getNews,
    getNewsById,
    postNews,
    patchNewsById,
    deleteNewsById
} from '../controllers/news'


const router = express.Router();

router.get('/', getNews);
router.post('/', postNews);
router.get('/:newsId', getNewsById);
router.patch('/:newsId', patchNewsById);
router.delete('/:newsId', deleteNewsById);

export default router;
