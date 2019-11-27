import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import { PORT } from './config/server';
import newsRout from './routes/news';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/news', newsRout);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Poks project',
    });
});

app.listen(PORT, () => {
    console.log(`Our server is running on port ${PORT}`);
});
