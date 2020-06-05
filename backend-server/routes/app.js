//requires
var express = require('express');

//inicializamos las variable
var app = express();

//rutas
app.get('/', ( req, res, next) =>{
    res.status(200).json({
        ok: true,
        mensaje: 'Success'
    })
})

module.exports = app;
