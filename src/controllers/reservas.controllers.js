const { getAllReservas, createReserva } = require("../models/reservas.models");


const obtenerReservas = async (req, res) => {
    try {
        // pide los datos 
        const reservas = await getAllReservas();
        // respuesta al cliente 
        res.status(200).json(reservas) 
    } catch (error) {
        console.log("error",error)
        res.status(500).json({
            msg: "Error de servidor."
        })
    }
};

const crearReserva = async (req, res) => {

    const { espacioId, fecha, horaInicio, horaFin } = req.body;

    try {        
        const nuevoId = Date.now();
         const nuevaReserva = {
            id: nuevoId,
            espacioId,
            fecha,
            horaInicio,
            horaFin
         };
    
         const reservaCreada = await createReserva(nuevaReserva);
    
         res.status(201).json(reservaCreada);
    } catch (error) {
         console.log("error",error)
         res.status(500).json({
            msg: "Error de servidor."
        })
    }

}


module.exports = {
    obtenerReservas,
    crearReserva
}