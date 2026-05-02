

const express = require('express');
const { registrar, login } = require('../controllers/usuarios.controllers');
const auth = require('../middlewares/auth');
const checkUser = require('../middlewares/checkRoles')
const router = express.Router();


router.post('/registro', registrar); // crear un nuevo usuario
router.post('/login', checkUser, login); // 

module.exports = router;