const data = require('../database/models');
const posteo = data.Posteo;

const postsController = {
    /*index : function(req, res){
        posteo.findAll().
        then((result) => {
            return res.render('posteos', {posteos : data.lista})

        });
    }
    */
    agregarPost: function(req, res) {
        res.render('agregarPost');
    },
    detallePost: function(req, res) {

        // req.params.id recibe, por parámetro, el id del posteo
        let idPosteo = req.params.id

        // Buscamos el posteo que coincida con el id recibido, además de agregar información del usuario que lo creó y los comentarios que tiene
        function buscarPosteoByID(idPosteo, data) {
            
            // Son las variables en donde se guardará la información del posteo, usuario y comentarios
            let posteoEncontrado = {} // Guardará el objeto "posteo"
            let usuario = {} // Guardará el objeto "usuario" del posteo
            let comentariosPosteos = [] // Guardará los objetos "comentarios" del posteo en formato array

            // Recorremos el array de posteos
            for (let i = 0; i < data.listadoPosteos.length; i++) {
                // Si el id del posteo coincide con el id recibido por parámetro...
                if (data.listadoPosteos[i].PostId == idPosteo) {
                    // Guardamos el objeto "posteo" en la variable "posteoEncontrado"
                    posteoEncontrado = data.listadoPosteos[i]
                }
            }

            // Recorremos el array de usuarios
            for (let i = 0; i < data.listadoUsuario.length; i++) {
                // Si el dni del usuario coincide con el dni del usuario que creó el posteo...
                if (posteoEncontrado.dni == data.listadoUsuario[i].dni) {
                    // Guardamos el objeto "usuario" en la variable "usuario"
                    usuario = data.listadoUsuario[i]
                }
            }

            // Al objeto "posteoEncontrado" le agregamos la propiedad "usuario" y le asignamos el objeto "usuario"
            posteoEncontrado.usuario = usuario
            
            // Recorremos el array de comentarios
            for (let i = 0; i < data.listadoComentarios.length; i++) {
                // Si el id del posteo coincide con el id del posteo del comentario...
                if (data.listadoComentarios[i].PostId == idPosteo) {
                    // Guardamos el objeto "comentario" en la variable "comentariosPosteos"
                    comentariosPosteos.push(data.listadoComentarios[i])
                }
            }
            
            // Al objeto "posteoEncontrado" le agregamos la propiedad "comentarios" y le asignamos el array "comentariosPosteos"
            posteoEncontrado.comentarios = comentariosPosteos

            // Recorremos los comentarios del posteo
            posteoEncontrado.comentarios.forEach(comentario => {
                // Al objeto "posteoEncontrado" le agregamos la propiedad "comentarios" y le asignamos el retorno de la función "buscarUsuarioByID"
                comentario.usuario = buscarUsuarioComentario(comentario.dni,data.listadoUsuario)
            })

            // Retornamos el objeto "posteoEncontrado"
            return posteoEncontrado
        }
        
        // Buscamos el usuario que coincida con el dni recibido
        function buscarUsuarioComentario(dniComentario, usuarios) {
            // Variable en donde se guardará la información del usuario
            let usuarioEncontrado = {}
            usuarios.forEach(usuario => {
                // Si el dni del usuario coincide con el dni recibido...
                if (usuario.dni == dniComentario) {
                    // Guardamos el objeto "usuario" en la variable "usuarioEncontrado"
                    usuarioEncontrado = usuario
                }
            });
            // Retornamos el objeto "usuarioEncontrado"
            return usuarioEncontrado
        }

        // Renderizamos la vista "detallePost" y le pasamos como parámetro el objeto "posteoEncontrado"
        res.render('detallePost', {
            posteo: buscarPosteoByID(idPosteo,data)
        });

        // res.send(buscarPosteoByID(idPosteo,data))
    }
}

module.exports = postsController;

