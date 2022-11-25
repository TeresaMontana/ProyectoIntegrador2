const data = require('../db/data');
const db = require("../database/models")
const Posteos = db.Posteo;

const indexController = {
    home: function(req,res){
        Posteos.findAll(
            {
                include: [
                    {association: "usuario"},
                    {association: 'comentarios_posteo', include: 'usuario_comentario'}
                ],
                order: [['createdAt', 'DESC'], ['comentarios_posteo', 'createdAt', 'DESC']],
            }
        )
        .then(function(posteos){
            // res.send(posteos)
            // res.send(res.locals)
            res.render('index', {posteos:posteos})
        })
        .catch(function(error){
            console.log(error)
        })
    },
    busqueda:  function(req,res){
        res.render('resultadoBusqueda')
    },
}


module.exports = indexController