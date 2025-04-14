// filepath: db.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Error al conectar con SQLite:", err.message);
  } else {
    console.log("Conectado a la base de datos SQLite");
  }
});

// Crear las tablas si no existen
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS clientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      apellido TEXT,
      producto_comprado TEXT,
      fecha TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS productos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      precio REAL
    )
  `);
});

module.exports = db;
