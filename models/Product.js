const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    order: Number
});

module.exports = mongoose.model('Product', ProductSchema);