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

router.post('/login', usersController.login);
router.post('/registracion', upload.single('FotodePerfil'), usersController.store);
router.get('/editarPerfil', usersController.editarPerfil);


//las rutas parametrizadas van al final
router.get('/detalleUsuario/:id', usersController.detalleUsuario);
router.get('/miPerfil/:id', usersController.miPerfil);




module.exports = router;
