import express from 'express';

import {
    getNews,
    getNewById,
    postNew,
    patchNewById,
    deleteNew
} from '../controllers/news/news'


const router = express.Router();

router.get('/', getNews);
router.post('/', postNew);
router.get('/:newsId', getNewById);
router.patch('/:newsId', patchNewById);
router.delete('/:newsId', deleteNew);

export default router;
