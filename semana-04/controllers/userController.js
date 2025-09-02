const User = require('../models/userModel.js');

const newUser = async(request, response) =>{
    const {nombre, email, password, foto} = request.body;
    const nuevoUsuario = new User();
    await nuevoUsuario.save();
};