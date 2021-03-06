//requires
var express = require('express');
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');

//inicializamos las variable
var app = express();


//Body-parser
// parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use((bodyParser.json()));

// importar rutas
var appRoutes = require('./routes/app');
var appUsuario = require('./routes/usuario');
var appLogin = require('./routes/login');
var appHospital = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');


//DB connection
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', ( err, res) => {
    if (err ) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m','online');
})

// Rutas
app.use('/usuario', appUsuario);
app.use('/login', appLogin);
app.use('/hospital', appHospital);
app.use('/medico', medicoRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);
app.use('/', appRoutes);


//escucha de peticiones
app.listen(3000, () =>{
    console.log('Express server corriendo en puerto 3000: \x1b[32m%s\x1b[0m','online');
});
