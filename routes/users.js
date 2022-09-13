var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/editarPerfil', usersController.editarPerfil);
router.get('/login', usersController.login);
router.get('/miPerfil', usersController.miPerfil);
router.get('/registracion', usersController.registracion);



//las rutas parametrizadas van al final
router.get('/detalleUsuario/:id', usersController.detalleUsuario);




module.exports = router;
