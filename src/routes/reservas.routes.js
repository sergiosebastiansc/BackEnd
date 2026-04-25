const express = require("express");
const { obtenerReservas, crearReserva, actualizarReserva, borrarReserva } = require("../controllers/reservas.controllers");
const validateReserva = require("../middlewares/validateReserva");
const validarConflicto = require("../middlewares/validarConflicto");

const router = express.Router();

router.get("/", obtenerReservas);
router.post("/",validateReserva, validarConflicto, crearReserva);
router.put("/", actualizarReserva);
router.delete("/", borrarReserva);


module.exports = router
