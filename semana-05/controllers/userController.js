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

const getUserByID = async (request, response) =>{
    const id = request.params.id;
    const user = await User.findById(id);
    if(user){
        response.status(200).json({data, user});
    }else{
        response.status(200).json({msg:'usuario no encontrado'});
    }
}

const updateUserByID = async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    const user = await User.findByIdAndUpdate(id, body);
    if(user){
        response.status(200).json({msg:'usuario borrado'});
    }else{
        response.status(200).json({msg:'usuario no encontrado'});
    }
}

const deleteUserByID = async (request, response) => {
    const id = request.params.id;
    const user = await User.findByIdAndDelete(id);
    if(user){
        response.status(200).json({msg:'usuario borrado'});
    }else{
        response.status(200).json({msg:'usuario no encontrado'});
    }
}

//modules.export = {newUser, listUsers}
export{newUser, listUsers, getUserByID, deleteUserByID, updateUserByID};