//const mongoose = require('mongoose');
import mongoose from 'mongoose'

const schema = mongoose.Schema;
//creamos el esquema
const miEsquema = new schema({
    nombre: String,
    email: String,
    password: String,
    foto: String
});

const User = mongoose.model('User', miEsquema);

//module.exports = User;
export default User;