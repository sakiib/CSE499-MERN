const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    product: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    img: {
        type: String, 
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;