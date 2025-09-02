const User = require('../models/userModel.js');

const newUser = async(request, response) =>{
    const {nombre, email, password, foto} = request.body;
    const nuevoUsuario = new User({nombre, email, password, foto});
    await nuevoUsuario.save();
};

const listUsers = async (request, response) => {
    const usuarios = await User.find();
    response.json(usuarios);
}

modules.export = {newUser, listUsers}