import { News } from "../../models/News/News";

export const deleteNewsById = (req, res) => {
    const { newsId } = req.params;

    News
        .remove({_id: newsId})
        .exec()
        .then(log => {
            const { deletedCount } = log;
            if (!deletedCount) {
                return res.status(404).json({
                    message: `No valid entry found by ID ${newsId}`,
                    log,
                });
            }

            res.status(200).json({
                message: `Deleted article with ID: ${newsId}`,
                log,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            })
        });
};
