var express = require('express');
var router = express.Router();
var loginController=  require("../controlador/loginController")

router.get("/login", loginController.index);

module.exports=router
