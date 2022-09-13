var express = require('express');
var router = express.Router();
var indexController = require( "../controllers/indexController")

router.get('/', indexController.home);
router.get('/busqueda', indexController.busqueda);




module.exports= router;