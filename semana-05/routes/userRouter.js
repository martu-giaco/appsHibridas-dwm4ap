//const express = require('express');
import express from 'express';
//const {newUser, listUsers} = require('../controllers/userController.js');
import {newUser, listUsers} from '../controllers/userController.js';
const router = express.Router();

//definimos las rutas de usuarios
router.get('/', listUsers);
router.post('/', newUser);

//module.export = router;
export default router;