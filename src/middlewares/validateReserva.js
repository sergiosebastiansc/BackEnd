const { getAllEspacios } = require("../models/espacios.models");


const validateReserva = async (req, res, next) => {

    const { espacioId, fecha, horaInicio, horaFin } = req.body;

    // validar que todos los campos sean obligatorios
    if (!espacioId || !fecha || !horaInicio || !horaFin ) {
        return res.status(400).json({
            msg: "Todos los campos son obligatorios."
        })
    }

    // validar id del espacio que se va a reservar

    const espacios = await getAllEspacios();
    const espacioExiste = espacios.some(espacio => espacio.id === Number(espacioId));

    if(!espacioExiste) {
        return res.status(404).json({
            msg: "El espacio seleccionado no existe."
        })
    }




    next();
}


module.exports = validateReserva;