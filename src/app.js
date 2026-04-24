// iniciar la aplicación de express

const express = require("express");
const cors = require("cors");
const espaciosRoutes = require("./routes/espacios.routes")
const reservarRoutes = require("./routes/reservas.routes");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const app = express();


//middlewares
app.use(express.json());  
app.use(cors());

app.use((req, res, next)=>{ 

    const valido = true;
    
    if (valido) {
         console.log("Datos válidos, avanza.")
         next();
    } else {
        return res.status(400).json({
            msg: "Datos invalidos"
        })
    }
})


// Rutas de espacios
app.use("/espacios", espaciosRoutes); 

// Rutas de reservas
app.use("/reservas", reservarRoutes);

 // manejador de rutas no definidas.
app.use(notFound);
// sobreescribir el manejador de errores de express.
app.use(errorHandler); 


module.exports = app;
