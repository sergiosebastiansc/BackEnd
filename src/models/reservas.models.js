
const fs = require("fs/promises");
const path = require("path");

const reservasPath = path.join(__dirname, "../../data/reservas.json");


// leer reservas
const readReservas = async () => {
     const data = await fs.readFile(reservasPath, "utf8");
        return JSON.parse(data)
}

// escribir  reservas
const writeReservas = async (reservas) => {
    await fs.writeFile(reservasPath, JSON.stringify(reservas, null, 2), "utf8");
}



const getAllReservas = async () => {
    return await readReservas();
}

const createReserva = async (nuevaReserva) => {
    const reservas = await readReservas();
    reservas.push(nuevaReserva);
    await writeReservas(reservas);
    return nuevaReserva;
}

// TODO - Por implementar
const updateReserva = async () => {

}

//TODO - Por implementar
const deleteReserva = async () => {

}

module.exports = {
    getAllReservas,
    createReserva,
    updateReserva,
    deleteReserva
}