const express = require("express");
const router = express.Router();
const db = require("../db"); // conexión a SQLite

// Mostrar la vista con todos los productos
router.get("/", (req, res) => {
  db.all("SELECT * FROM productos ORDER BY id DESC", [], (err, rows) => {
    if (err) {
      res.status(500).send("Error al obtener productos");
    } else {
      res.render("productos", { title: "Productos", productos: rows });
    }
  });
});

// Agregar un nuevo producto
router.post("/add", (req, res) => {
  const { nombre, precio } = req.body;
  db.run(
    "INSERT INTO productos (nombre, precio) VALUES (?, ?)",
    [nombre, precio],
    (err) => {
      if (err) {
        res.status(500).send("Error al agregar producto");
      } else {
        res.redirect("/productos");
      }
    }
  );
});

module.exports = router;
