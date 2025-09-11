//const express = require('express');
import express from 'express';
//const mongoose = require('mongoose');
import mongoose from 'mongoose';
//const dotenv = require('dotenv');
import dotenv from 'dotenv';
import routerAPI from './routes/index.js';

dotenv.config();
//conexiòn con la base de datos
const urlDB = process.env.URI_DB;
mongoose.connect(urlDB);
const db = mongoose.connection;

db.on('error', () =>{console.error('error de conexión')});
db.on('open', () =>{console.log('conectó la base de datooos woooo >0<')});


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/', express.static('public'))

app.get('/', (request, response) =>{
    response.send('<h1> API REST </h1>')
});

routerAPI(app);

app.listen(PORT, () => {
    console.log(`API Rest en el puerto ${PORT}`)
});