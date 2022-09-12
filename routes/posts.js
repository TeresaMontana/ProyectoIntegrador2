var express = require('express');
var router = express.Router();
var postsController = require ('../controllers/postsController')

/*GET home page */
router.get('/agregarPost', postsController.agregarPost);
router.get('/detallePost:id', postsController.detallePost);

module.exports = router 