var express = require('express');
var app = express.Router();

app.get("/", (req, res) => {
    res.send("API Running...");
});

module.exports = app