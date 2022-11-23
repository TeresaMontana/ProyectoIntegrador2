const db = require("../database/models");
const Posteos = db.Posteo;

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
    },

    //buscador

    busqueda: function (req, res) {
        let busqueda = req.query.q;
        let filtro = req.query.filtro;
        let ordenar = req.query.ordenar;
    
        if (ordenar !== "ASC") {
          ordenar = "DESC";
        }
    
        if (filtro === "usuarios") {
          console.log("busqueda por usuario");
          db.Usuario.findAll({
            where: {
              username: {
                [db.Sequelize.Op.like]: "%" + busqueda + "%",
              },
            },
            include: [
              { association: "posteos_usuario", include: "usuario" },
              { association: "comentarios_usuario", include: "usuario_comentario" },
            ],
            order: [["username", ordenar]],
          })
            .then(function (usuarios) {
              res.render("resultadoBusqueda", {
                usuarios: usuarios,
                posteos: null,
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        } else if (filtro === "posteos") {
          console.log("busqueda por posteos");
          Posteos.findAll({
            where: {
              texto: {
                [db.Sequelize.Op.like]: "%" + busqueda + "%",
              },
            },
            include: [
              { association: "usuario" },
              { association: "comentarios_posteo", include: "usuario_comentario" },
            ],
            order: [
              ["createdAt", ordenar],
              ["comentarios_posteo", "createdAt", "ASC"],
            ],
          })
            .then(function (posteos) {
              res.render("resultadoBusqueda", {
                posteos: posteos.slice(0, 10),
                usuarios: null,
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          res.redirect("/");
        }
      },
}


module.exports = postsController;

