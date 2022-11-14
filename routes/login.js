var express = require('express');
var router = express.Router();
var usersController=  require("../controllers/usersController")

router.post("/login", usersController.login);

module.exports= router
