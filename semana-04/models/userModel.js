const mongoose = require('mongoose');
const schema = mongoose.schema;
//creamos el esquema
const miEsquema = new schema({
    nombre: String,
    email: String,
    password: String,
    foto: String
});

const User = mongoose.model('User', miEsquema);

module.exports = User;
