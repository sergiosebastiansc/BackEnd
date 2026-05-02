const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { crearNuevoUsuario, encontrarUsuarioPorEmail } = require("../models/usuarios.mongoose");
const { connect } = require('../database/mongoose');

const registrar = async (req, res, next) => {

    try {
        const { nombre, email, password } = req.body; //valida los datos
        await connect();

        // consulta al modelo para crear el documento en la base de datos
        const usuario = await crearNuevoUsuario({ nombre, email, password })

        res.status(201).json({
            msg: "Usuario creado correctamente.",
            id: usuario._id
        })
        
    } catch (error) {
        next(error)
    }

}

const login = async (req, res, next) => {

    try {
        const { email, password } = req.body; //valida datos
        await connect();
        const usuario = await encontrarUsuarioPorEmail(email);

        if(!usuario) {
            return res.status(401).json({msg: "Credenciales inválidas."})
        }

        const passwordValidate = await bycrypt.compare(password, usuario.password); //compara password ingresado vs hash guardado

        if(!passwordValidate) { //Validar password
            return res.status(401).json({msg: "Credenciales inválidas."})
        }

        // genera token de acceso

        const token = jwt.sign({id: usuario._id, email: usuario.email, rol: usuario.rol}, process.env.SECRET_KEY, {expiresIn: '8h'})


        // respuesta al cliente con su información de acceso
        res.status(200).json({
            msg: "Login correcto",
            token: token
        })
        
    } catch (error) {
        next(error)
    }

}

module.exports = {
    registrar,
    login
}