//const express = require('express');
import express from 'express';
//const {newUser, listUsers} = require('../controllers/userController.js');
import {newUser, listUsers, getUserByID, deleteUserByID, updateUserByID} from '../controllers/userController.js';
const router = express.Router();

//definimos las rutas de usuarios
router.get('/', listUsers);
router.get('/:id', getUserByID);
router.post('/', newUser);
router.delete('/:id', deleteUserByID);
router.post('/:id', updateUserByID);

//module.export = router;
export default router;