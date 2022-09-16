const data = require('../db/data');

const postsController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
    },
    detallePost: function(req, res) {
        let idPosteo = req.params.id

        function buscarPosteoByID(idPosteo, data) {
            
            let posteoEncontrado = {}
            let usuario = {}
            let comentariosPosteos = []

            for (let i = 0; i < data.listadoPosteos.length; i++) {
                if (data.listadoPosteos[i].id == idPosteo) {
                    posteoEncontrado = data.listadoPosteos[i]
                }
            }

            for (let i = 0; i < data.listadoUsuario.length; i++) {
                if (posteoEncontrado.dni == data.listadoUsuario[i].dni) {
                    usuario = data.listadoUsuario[i]
                }
            }

            posteoEncontrado.usuario = usuario

            for (let i = 0; i < data.listadoComentarios.length; i++) {
                if (data.listadoComentarios[i].idPosteo == idPosteo) {
                    comentariosPosteos.push(data.listadoComentarios[i])
                }
            }
            
            posteoEncontrado.comentarios = comentariosPosteos

            posteoEncontrado.comentarios.forEach(comentario => {
                comentario.usuario = buscarUsuarioComentario(comentario.dni,data.listadoUsuario)
            })

            return posteoEncontrado
        }
        
        function buscarUsuarioComentario(dniComentario, usuarios) {
            let usuarioEncontrado = {}
            usuarios.forEach(usuario => {
                if (usuario.dni == dniComentario) {
                    usuarioEncontrado = usuario
                }
            });
            return usuarioEncontrado
        }

        /*res.render('detallePost', {
            posteo: buscarPosteoByID(idPosteo,data)
        });*/

        res.send(buscarPosteoByID(idPosteo,data))
    }
}



module.exports = postsController;