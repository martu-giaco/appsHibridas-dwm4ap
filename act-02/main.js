const Product = require("./product.js");

const productManager = new Product();

productManager.addProduct({
    id:1, 
    name: 'Teclado', 
    desc: 'Teclado Mecánico', 
    price: 25000, 
    stock: 25
})

productManager.addProduct({
    id:2, 
    name: 'njz', 
    desc: 'helloooo', 
    price: 1000000, 
    stock: 900
})

productManager.getProducts();

productManager.getProductbyId(2);
productManager.getProductbyId(5);