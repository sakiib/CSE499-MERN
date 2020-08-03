exports.categoryController = (req, res) => {
    res.json({
        successMessage: `${req.body.category} was created`
    });
};