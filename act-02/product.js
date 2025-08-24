class Product {
    products = [];
    
    constructor(products=[]){
        this.products = products;
    }

    //metodos
    addProduct(products){
        if(products.name === "" || products.desc === ""){
            console.log("todos los campos son obligatorios");
        }else if(isNaN(products.price) || isNaN(products.stock)){
            console.log("el precio y el stock del producto deben ser numeros");
        }else{
            const id = crypto.randomUUID();
            console.log("id: " + id);
            this.products.push(products);
        }
    }

    getProducts(){
        console.log('todos los productos:')
        console.table(this.products)
    }

    getProductbyId(id){
        let foundProduct = this.products.find(product => product.id === id);
        
        if(foundProduct == null){
                console.log('el id que cargó no corresponde a ningún producto existente');
        }else{
            console.log('producto encontrado:')
            console.table(foundProduct);
        }
    }
}

module.exports = Product;