var express = require('express');
var router = express.Router();
var indexController=  require("../controlador/indexController")

router.get("/", indexController.index);

module.exports=router