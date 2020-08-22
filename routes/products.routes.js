const {
    getProducts,
    getProductsById
} = require('../controllers/products.controller');

const routes = (app) => {
    app.get('/products', getProducts);
    app.get('/products/:productId', getProductsById);
}

module.exports.productRoutes = routes;

