import isEmpty from 'lodash/isEmpty';

import { News } from "../../models/News/News";

import { getUncorrectedFields } from "./utils";
import { newsSchema } from "../../models/News/constants";

export const patchNewsById = (req, res) => {
    const { newsId } = req.params;
    const { data } = req.body;

    if (isEmpty(data)) {
        return res.status(400).json({
            message: 'Bad request: Empty "req.body.data"',
            data,
        });
    }

    const uncorrectedFields = getUncorrectedFields(data, newsSchema);
    if (!isEmpty(uncorrectedFields)) {
        return res.status(400).json({
            message: 'Bad request: uncorrected fields',
            uncorrectedFields,
        });
    }

    News
        .updateOne({_id: newsId}, {$set: data})
        .exec()
        .then((log) => {
            const { n, nModified } = log;

            if (!n) {
                return res.status(404).json({
                    message: `No valid entry found by ID ${newsId}`,
                    log,
                });
            }

            if (!nModified) {
                return res.status(200).json({
                    message: `No any fields modified in the article by ID ${newsId}`,
                    log,
                });
            }
            res.status(200).json({
                message: `Updated article with current ID: ${newsId}`,
                log,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
};
