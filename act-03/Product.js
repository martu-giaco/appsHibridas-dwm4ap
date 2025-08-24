const fs = require('fs/promises');
const path = './data/products.json';

class Product{
    products = [];
    constructor(products=[]){
        this.products = products
    }
    async saveJSON(){
        try {
            const data = JSON.stringify( this.products, null, 2);
            await  fs.writeFile(path, data);
        } catch (error) {
            console.log('No se pudo guardar los datos')
        }
    }
    async readJSON(){
        try {
            const data = await fs.readFile(path);
            const products = JSON.parse(data);
            return products
        } catch (error) {
            console.error('No se pudo leer los datos');
            return []
        }
    }
    addProduct(product){
        // Validar datos!
        const id = crypto.randomUUID();
        product.id = id;
        this.products.push(product);
        this.saveJSON();
    }
    async getProducts(){
        this.products = await this.readJSON();
        return this.products
    }
    async getProductById(id){
        this.products = await this.readJSON();
        const product = this.products.find( item => item.id == id );
        return product ? product : {};
    }
    async deleteProductById(id){
    this.products = await this.readJSON();
    const index = this.products.findIndex(product => product.id == id);
    if (index !== -1) {
        const deletedProduct = this.products.splice(index, 1)[0];
        this.saveJSON();
        console.log('Producto eliminado: ' + deletedProduct.name);
    } else {
        console.log('Producto no encontrado');}
    }
    async updateProductById(id, product){
    this.products = await this.readJSON();
    const index = this.products.findIndex(item => item.id == id);
    this.products[index].name = product.name;
    this.products[index].description = product.description;
    this.products[index].price = product.price;
    this.products[index].stock = product.stock;
    console.log(index)
    this.saveJSON();
    }
}

module.exports = Product;