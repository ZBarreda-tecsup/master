const express = require("express");
const app = express();
const path = require("path");

const db = require("./db"); // <-- Importar la conexión ya lista

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

// Importar rutas
const indexRoute = require("./routes/index");
app.use("/", indexRoute);

const clientesRoute = require("./routes/clientes");
app.use("/clientes", clientesRoute);

const productosRoute = require("./routes/productos");
app.use("/productos", productosRoute);

const PORT = 9000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
