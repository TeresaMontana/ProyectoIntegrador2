var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* Requiero Modulos Multer y Path*/

let multer = require ('multer');
let path = require ('path');

/* Config. de Multer */

let storage = multer.diskStorage({
    destination: function(req,file,cb){
    cb(null,path.join(__dirname, '../public/img/FotoPerfil'));
},
    filename: function(req,file,callback){
    callback(null,file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
}
});

let upload = multer({storage:storage});


/* GET users listing. */

// Renderiza la vista de login
router.get('/login', usersController.login);

// Renderiza la vista de registro
router.get('/registracion', usersController.registracion);

// Renderiza la vista de mi perfil
router.get('/miPerfil', usersController.miPerfil);
router.get('/editarPerfil', usersController.editarPerfil);

// Procesa el formulario de login
router.post('/login', usersController.loginPost);

// Procesa el formulario de registro
router.post('/registracion', upload.single('FotodePerfil'), usersController.store);

// Procesa el formulario de edicion de perfil
router.post('/editarPerfil', upload.single('FotodePerfil'), usersController.actualizarPerfil);
router.post('/logout', usersController.logout);


//las rutas parametrizadas van al final.
router.get('/detalleUsuario/:id', usersController.detalleUsuario);

module.exports = router;
