const {
    getCategories,
    createCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
} = require('../controllers/categories');


const routes = app => {
    app.get('/categories', getCategories);
    app.post('/categories', createCategories);
    app.get('/categories/:id', getCategoryById);
    app.put('/categories/:id', updateCategoryById);
    app.delete('/categories/:id', deleteCategoryById);
}



module.exports.categoryRoutes = routes;