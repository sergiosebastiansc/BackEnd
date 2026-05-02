const { connect } = require("../database/mongoose");
const { obtenerTodosLosEspacios } = require("../models/espacios.mongoose");

const obtenerEspacios = async (req, res) => {

    try {
        await connect();             
        const espacios = await obtenerTodosLosEspacios(); // pide los datos 
        res.status(200).json(espacios) // respuesta al cliente 
        } catch (error) {
         console.log("error",error)
        res.status(500).json({
            msg: "Error de servidor."
            
       
        })
    }
};

const crearEspacios = async (req, res, next) => {

    const { nombre, capacidad, precio, ubicacion, disponibilidad } = req.body;

    try {        
        const nuevoId = Date.now();
         const nuevoEspacio = {
            id: nuevoId,
            nombre,
            capacidad,
            precio,
            ubicacion,
            disponibilidad
         };
    
         const EspacioCreado = await createEspacio(nuevoEspacio);
    
         res.status(201).json(espacioCreado);
    } catch (error) {
        next(error);       
    }
};

module.exports = {
    obtenerEspacios,
    crearEspacios
}
