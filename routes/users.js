var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/login', usersController.login);
router.get('/registracion', usersController.registracion);
router.get('/editarPerfil', usersController.editarPerfil);


//las rutas parametrizadas van al final
router.get('/detalleUsuario/:id', usersController.detalleUsuario);
router.get('/miPerfil/:id', usersController.miPerfil);




module.exports = router;
