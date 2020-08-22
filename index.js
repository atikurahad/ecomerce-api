const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {
    database
} = require('./services/database');
const {
    categoryRoutes
} = require('./routes/categories.routes');

const {
    productRoutes
} = require('./routes/products.routes')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'));


categoryRoutes(app);
productRoutes(app);



app.listen(3000, () => {
    console.log("App is running....!");
})