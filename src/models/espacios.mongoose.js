// importar mongoose
 const mongoose = require('mongoose')
// Definir el schema
const espacioSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    ubicacion: {type: String, required: true},
    precio: {type: String, require:true},
    capacidad: {type: Number, required: true},
    disponibilidad: {type: Boolean, default: true}
})

// Crear el modelo

const Espacio = mongoose.model('Espacio', espacioSchema)

// obtener todos los espacios

async function obtenerTodosLosEspacios() {
    return await Espacio.find({});
}

async function obtenerUnEspacioPorId(id){
    return await Espacio.findById(id)

}

module.exports = {
    obtenerTodosLosEspacios,
    obtenerUnEspacioPorId
};