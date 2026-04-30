const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Falta la variable de entorno MONGO_URI");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connect() {
  try {
    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGO_URI, {
        bufferCommands: false,
      });
    }

    cached.conn = await cached.promise;
    console.log("MongoDB conectado correctamente.");
    return cached.conn;

  } catch (error) {
    cached.promise = null; // permite reintentar en el próximo llamado
    throw error;
  }
}

module.exports = { connect };
