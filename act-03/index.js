const Product = require('./Product');
const model = new Product();

/* model.getProducts().then( lista => {
    console.table(lista);
}) */

async function mostrar(){
    const lista = await model.getProducts();
    console.table(lista);
}
//mostrar();

async function buscar(id) {
    const product = await model.getProductById(id);
    console.log(product);
}

buscar('40743f69-63c9-4ece-84b7-cd3a7f616b23');
/* model.addProduct ( {
    name: 'Teclado dos',
    description: 'Teclado Mecánico',
    price: 25000,
    stock: 25
});

model.addProduct ( {
    name: 'Mouse',
    description: 'Mouse',
    price: 15000,
    stock: 20
});  */

//model.deleteProductById("40743f69-63c9-4ece-84b7-cd3a7f616b2f");

model.updateProductById("35c37ec7-177b-47bf-a585-3e8b15ae9b96", {
    name: 'Teclado trews',
    description: 'Teclado Mecánico',
    price: 30000,
    stock: 25
}); 

mostrar();
