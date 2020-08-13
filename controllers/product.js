const Product = require('../models/Product');

exports.create = async (req, res) => {
    const { product } = req.body;
    try {
        let newProduct = new Product();
        newProduct.product = product;
        newProduct = await newProduct.save();
        res.status(200).json({
            successMessage: `${newProduct.product} was created`,
        });
    } catch(err) {
        console.log('product create error ', err);
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }
};