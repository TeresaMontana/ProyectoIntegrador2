var express = require('express');
var router = express.Router();
const postsController = require('../controllers/postsController');

/* Requiero Modulos Multer y Path*/

let multer = require ('multer');
let path = require ('path');

/* Config. de Multer */

let storage = multer.diskStorage({
    destination: function(req,file,cb){
    cb(null,path.join(__dirname, '../public/img/Posteos'));
},
    filename: function(req,file,callback){
    callback(null,file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
}
});

let upload = multer({storage:storage});

router.get("/agregar", postsController.vista_agregarPost);

router.post("/agregar", upload.single("Posteos"), postsController.store_agregarPost);

router.get('/editar/:id', postsController.vista_editarPost);
router.get("/detallePost/:id", postsController.detallePost);
router.post("/editar/:id", upload.single("Posteos"), postsController.store_editarPost);
router.post("/detallePost/:id", postsController.store_comentario);
router.get("/resultadoBusqueda", postsController.busqueda);

module.exports = router;
