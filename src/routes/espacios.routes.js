
const express = require("express");
const { obtenerEspacios, crearEspacios } = require("../controllers/espacios.controllers");
const { checkAdmin } = require("../middlewares/checkRoles")
const router = express.Router();

router.get("/", obtenerEspacios)
router.post("/", checkAdmin, crearEspacios)


module.exports = router


