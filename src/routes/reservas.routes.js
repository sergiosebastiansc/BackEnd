
const express = require("express");
const { obtenerReservas, crearReserva } = require("../controllers/reservas.controllers");
const validateReserva = require("../middlewares/validateReserva");
const validarConflicto = require("../middlewares/validarConflicto");

const router = express.Router();

router.get("/", obtenerReservas);
router.post("/",validateReserva, validarConflicto, crearReserva);


module.exports = router