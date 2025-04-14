const express = require("express");
const router = express.Router();
const db = require("../db"); // Asegúrate que db.js exporta correctamente el objeto SQLite

// Mostrar la vista con todos los clientes
router.get("/", (req, res) => {
  db.all("SELECT * FROM clientes ORDER BY id DESC", [], (err, rows) => {
    if (err) {
      res.status(500).send("Error al obtener clientes");
    } else {
      res.render("clientes", { title: "Clientes", clientes: rows });
    }
  });
});

// Agregar un nuevo cliente
router.post("/add", (req, res) => {
  const { nombre, apellido, producto_comprado, fecha } = req.body;
  db.run(
    "INSERT INTO clientes (nombre, apellido, producto_comprado, fecha) VALUES (?, ?, ?, ?)",
    [nombre, apellido, producto_comprado, fecha],
    (err) => {
      if (err) {
        res.status(500).send("Error al agregar cliente");
      } else {
        res.redirect("/clientes");
      }
    }
  );
});

module.exports = router;
