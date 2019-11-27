import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import { PORT } from './config/server';
import newsRoute from './routes/news';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/news', newsRoute);


app.use((req, res, next) => {
  const error = new Error('Content not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status,
      message: error.message,
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
