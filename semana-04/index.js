const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//conexiòn con la base de datos
const urlDB = process.env.URI_DB;
mongoose.connect(urlDB);
const db = mongoose.connection;

db.on('error', () =>{console.error('error de conexión')});
db.on('open', () =>{console.error('conoectó la db')});


const PORT = process.env.PORT;
const app = express();

app.use('/', (request, response) =>{
    response.send('<h1> API REST </h1>')
});

app.listen(PORT, () => {
    console.log(`API Rest en el puerto ${PORT}`)
});