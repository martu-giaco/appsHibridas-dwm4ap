//const User = require('../models/userModel.js');
import User from '../models/userModel.js';

const newUser = async(request, response) =>{
    const {nombre, email, password, foto} = request.body;
    const nuevoUsuario = new User({nombre, email, password, foto});
    const data = await nuevoUsuario.save();
    response.status(201).json({msg: 'hechooo :3', data})
};

const listUsers = async (request, response) => {
    const usuarios = await User.find();
    response.json(usuarios);
}

//modules.export = {newUser, listUsers}
export{newUser, listUsers};