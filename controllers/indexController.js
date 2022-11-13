const data = require('../db/data');

const indexController = {
    home: function(req,res){

        let listadoPosteos = data.listadoPosteos

        listadoPosteos.forEach(posteo => {
            posteo.usuario = data.listadoUsuario.find(usuario => usuario.dni === posteo.dni)
            posteo.comentarios = data.listadoComentarios.filter(comentario => comentario.PostId === posteo.PostId)
            posteo.comentarios.forEach(comentario => {
                comentario.usuario = data.listadoUsuario.find(usuario => usuario.dni == comentario.dni)
            })
        })

        res.render('index', {posteos:listadoPosteos})

        // res.send(listadoPosteos).

    },
    busqueda:  function(req,res){
        res.render('resultadoBusqueda')
    },
}


module.exports = indexController