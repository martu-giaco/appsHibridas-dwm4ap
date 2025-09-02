const chalk = require('chalk');
//import chalk from "chalk";

const express = require('express');
const port = 3000;
const app = express();
const Product = require('./Product');
const modelProduct = new Product();

const home = (request, response) =>{
    console.log(chalk.cyan('Se accedió al Home'));
    response.send(`<h1>Hola desde express! ;-)</h1>
        <ul>
            <li><a href="/contactos">Contactos</a></li>
            <li><a href="/productos">Productos</a></li>
        </ul>
        `)}

app.get('/', home);

app.get('/contactos', (request, response) => {
    response.send('<h1>contactos</h1>')
});

app.get('/productos', async (request, response) => {
    const list = await modelProduct.getProducts();
    response.json(list)
    console.table(list)
});

app.get('/productos/:id', async (request, response)=>{
    const id = request.params.id;
    console.log(id)
    response.json( { id } );
})

console.log( chalk.bgBlue('API REST'));

console.log(  chalk.cyan(' Hola!')  );

app.listen(port, () => {
    console.log(`servidor en el puerto ${port}`)
})