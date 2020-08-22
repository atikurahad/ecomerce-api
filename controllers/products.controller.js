
const products = [
    {
        id : 1,
        name : "samsung",
        description: "mobilePhone",
        order: 0
    },
    {
        id: 2,
        name: "nokia",
        description: "mobilePhone",
        order: 1
    },
    {
        id: 3,
        name: "xiaomi",
        description: "mobilePhone",
        order: 3
    },
]

module.exports.getProducts = (req, res) => {
    res.status(200).json(products)
}

module.exports.getProductsById = (req, res) => {
    const id = req.params.productId;
    obj = {};
    products.map((product)=> {
        console.log(product);
        if (product.id === parseInt(id)) {
            obj = product
        }
    })
    res.status(200).json(obj)
}