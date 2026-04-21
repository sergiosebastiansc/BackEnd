
const express = require("express");
const { obtenerEspacios, crearEspacios } = require("../controllers/espacios.controllers");

const router = express.Router();

router.get("/", obtenerEspacios)

router.post("/", crearEspacios)


module.exports = router


