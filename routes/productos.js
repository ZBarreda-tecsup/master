const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("productos", { title: "productos" });
});

module.exports = router;