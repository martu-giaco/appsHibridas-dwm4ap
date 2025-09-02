const express = require('express');
const mongoose = require('mongoose');
//conexiòn con la base de datos
const urlDB = 'mongodb://localhost:27017';
mongoose.connect(urlDB);
const db = mongoose.connection;

db.on('error', () =>{console.error('error de conexión')});
db.on('opne', () =>{console.error('conoectò la db')});


const PORT = 5000;
const app = express();

app.use('/', (request, response) =>{
    response.send('<h1> API REST </h1>')
});

app.listen(PORT, () => {
    console.log(`API Rest en el puerto ${PORT}`)
});