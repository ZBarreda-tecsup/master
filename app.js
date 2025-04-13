// filepath: c:\Users\ASUS ZEPHYRUS\Desktop\Desarrollo en la Nube\Semana4\app.js
const express = require("express");
const app = express();
const path = require("path");

// Configurar el motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

// Importar rutas
const indexRoute = require("./routes/index");
app.use("/", indexRoute);

const clientesRoute = require("./routes/clientes");
app.use("/clientes", clientesRoute);

const productosRoute = require("./routes/productos");
app.use("/productos", productosRoute);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));