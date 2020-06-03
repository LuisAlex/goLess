//requires
var express = require('express');
var mongoose = require ('mongoose');

//inicializamos las variable
var app = express();

//DB connection
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', ( err, res) => {
    if (err ) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m','online');
})

//rutas
app.get('/', ( req, res, next) =>{
    res.status(200).json({
        ok: true,
        mensaje: 'Success'
    })
})

//escucha de peticiones
app.listen(3000, () =>{
    console.log('Express server corriendo en puerto 3000: \x1b[32m%s\x1b[0m','online');
});
