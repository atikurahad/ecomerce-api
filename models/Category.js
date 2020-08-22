const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    description: String,
    order: Number
});

module.exports = mongoose.model('Category', CategorySchema);