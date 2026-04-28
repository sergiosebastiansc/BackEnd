const mongoose= require ("mongoose");
const MONGO_URI="mongodb://localhost:27017/"

if (!MONGO_URI) {
  throw new Error("Falta la variable MONGO_URI");
}

//buscar si ya existe una conexión guardada globalmente.
let cached = global.mongoose;
//Inicializa la cache
if (!cached) {
  cached = global.mongoose = {
    //Si no existe, crea este objeto:
    conn: null,
    promise: null,
  };
}

//funcion asincrona para conectar a base de datos
async function connect() {
     try {
//si ya esta conectado reutiliza (la devuelve y no vuelve a conectarse)
 if (cached.conn) {
        return cached.conn;
        }

//si no hay conexion crea la promesa y la guarda en cashed.promise
if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI, {
          bufferCommands: false, //le dice a mongoose que no guarde consultas pendientes si no hay conexion
        });
        console.log("MongoDB conectado correctamente.");
        }
        } catch (error) {
             throw new Error(error);
            }

        cached.conn = await cached.promise; //espera que la promesa termine,cuando termina exitosamente guarda resultado
        }
        return cached.conn; //La devuelve para usarla en otros archivos.

module.exports = {connect};
