const express = require('express');
const {newUser, listUsers} = require('../controllers/userController.js');
const router = express.Router();
//definimos las rutas de usuarios
router.get('/', listUsers);
router.post('/', newUser);

module.export = router;