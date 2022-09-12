var express = require('express');
var router = express.Router();
var postsController = require ('../controllers/postsController')

/*GET home page */
router.get('/agregar', postsController.agregarPost);
router.get('/detalle/:id', postsController.detallePost);

module.exports = router 