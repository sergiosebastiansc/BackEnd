const { getAllEspacios } = require("../models/espacios.models");

const obtenerEspacios = async (req, res) => {

    try {            
        const espacios = await getAllEspacios(); 
        res.status(200).json(espacios) 
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
