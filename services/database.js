const mongoose = require('mongoose');
// mongoose connection
mongoose.Promise = global.Promise;
module.exports.database = mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("Database Connection successful!")
}).catch(err => {
    console.log(err)
});