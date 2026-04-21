const { getAllEspacios } = require("../models/espacios.models")


const obtenerEspacios = async (req, res) => {
    try {
        // pide los datos
        const espacios = await getAllEspacios(); 
        // respuesta al cliente
        res.status(200).json(espacios) 
    } catch (error) {
        console.log("error",error)
        res.status(500).json({
            msg: "Error de servidor."
        })
    }
   
}

const crearEspacios = async (req, res) => {
    res.json({
        msg: "Crear espacios"
    })
}


module.exports = {
    obtenerEspacios,
    crearEspacios
}