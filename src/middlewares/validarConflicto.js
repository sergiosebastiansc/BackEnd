const { getAllReservas } = require("../models/reservas.models");


const validarConflicto = async (req, res, next) => {

  const { espacioId, fecha, horaInicio, horaFin } = req.body;

  const reservas = await getAllReservas();
  
  const hayConflicto = reservas.some( reserva => reserva.espacioId === espacioId && reserva.fecha === fecha && horaInicio < reserva.horaFin && horaFin > reserva.horaInicio
 )

  if(hayConflicto){
    return res.status(400).json({
        msg: "Ya existe una reserva para ese horario y oficina seleccionados."
    })
  }

  next();

}


module.exports = validarConflicto