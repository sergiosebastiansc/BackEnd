// =========================
// SECCIÓN: Modelo de Reservas con Mongoose
// Responsable: Valentina Medina
// Objetivo: definir la estructura de una reserva para MongoDB.
// Qué tocar aquí: campos propios de una reserva si el equipo cambia los requisitos.
// =========================

const mongoose = require("mongoose");

// =========================
// SECCIÓN: Schema de reserva
// Objetivo: declarar qué datos tendrá cada reserva en la base de datos.
// Importante: este modelo NO modifica controllers ni rutas; queda listo para cuando Mauricio adapte controllers a MongoDB.
// =========================

const reservaSchema = new mongoose.Schema(
  {
    // Relación con el espacio reservado.
    // Usa ref: "Espacio" para conectar con el modelo espacios.mongoose.js de Sergio.
    espacioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Espacio",
      required: [true, "El espacio es obligatorio."],
    },

    // Relación opcional con usuario.
    // Queda preparada para integrarse con usuario.model.js de Gloria cuando el flujo de login/usuarios esté listo.
    usuarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: false,
    },

    // Fecha de la reserva.
    // Se deja como String para mantener coherencia con el controller actual, que recibe fecha desde req.body.
    fecha: {
      type: String,
      required: [true, "La fecha es obligatoria."],
      trim: true,
    },

    // Hora de inicio de la reserva.
    horaInicio: {
      type: String,
      required: [true, "La hora de inicio es obligatoria."],
      trim: true,
    },

    // Hora de término de la reserva.
    horaFin: {
      type: String,
      required: [true, "La hora de término es obligatoria."],
      trim: true,
    },

    // Estado de la reserva para futuras validaciones del flujo.
    estado: {
      type: String,
      enum: ["pendiente", "confirmada", "cancelada"],
      default: "pendiente",
    },
  },
  {
    timestamps: true,
  }
);

// =========================
// SECCIÓN: Exportación del modelo
// Objetivo: permitir que controllers u otros archivos usen el modelo Reserva.
// =========================

module.exports = mongoose.model("Reserva", reservaSchema);
