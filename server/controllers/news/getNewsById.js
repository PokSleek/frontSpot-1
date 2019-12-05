import { News } from "../../models/News/News";

export const getNewsById = (req, res) => {
    const { newsId } = req.params;

    News.findById(newsId)
        .exec()
        .then(data => {
            if (data) {
                res.status(200).json({
                    message: `Found article with current ID: ${newsId}`,
                    data,
                });
            } else {
                res.status(404).json({ message: `No valid entry found by ID  ${newsId}` });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};
