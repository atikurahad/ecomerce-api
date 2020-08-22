const Category = require('../models/Category');


module.exports.getCategories = async (req, res) => {


    try {
        const category = await Category.find({});
        res.status(200).json(category)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.createCategories = async (req, res) => {
    const data = req.body;
    try {
        const category = await Category.create({
            name: data.category_name,
            description: data.desc,
            order: data.order
        })

        res.status(200).json(category)
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports.getCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.find({
            _id: id
        });
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports.updateCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const category = await Category.findOneAndUpdate({
            _id: id
        }, {
            name: data.category_name,
            description: data.desc,
            order: data.order
        }, {
            upsert: true,
            new: true
        })
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports.deleteCategoryById = async (req, res) => {
    try {
        const id = req.params.id;

        const category = await Category.findByIdAndDelete(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json(error);
    }
}