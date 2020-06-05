var jwt = require('jsonwebtoken');

//inicializamos las variable
var SEED = require('../config/config').SEED;

// =====================================================
// Verificar Token
// =====================================================
exports.vericaToken = function( req, res, next) {

        var token = req.query.token;
        jwt.verify ( token, SEED, (err, decoded) =>{
            if (err) {
                return res.status(401).json({
                    ok: false,
                    mensaje: 'token no Autorizado',
                    errors: err
                });
            }
            req.usuario = decoded.usuario;
            next();

        });
}

