// =========================
// SECCIÓN: CARGA DE VARIABLES DE ENTORNO (.env sin dotenv)
// =========================
process.loadEnvFile();
// =========================
// SECCIÓN: Inicio del servidor y conexión a MongoDB
// =========================

const app = require("./app");
const { connect } = require("./database/mongoose");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connect();

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar MongoDB o levantar el servidor:", error.message);
    process.exit(1);
  }
}

startServer();
