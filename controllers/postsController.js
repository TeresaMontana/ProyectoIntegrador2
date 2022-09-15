const data = require('../db/data');

const postsController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
    },
    detallePost: function(req, res) {
        let idPosteo = req.params.id
        let posteoEncontrado
        let comentarioPosteos = []
        for (let i = 0; i < data.listadoPosteos.length; i++) {
            if (data.listadoPosteos[i].id === idPosteo) {
                posteoEncontrado = data.listadoPosteos[i]
            }
        }
        for (let i = 0; i < data.listadoComentarios.length; i++) {
            if (data.listadoComentarios[i].idPosteo === idPosteo) {
                comentarioPosteos.push(data.listadoComentarios[i])
            }
        }

        posteoEncontrado.comentarios = comentarioPosteos

        res.render('detallePost', {
            posteo: posteoEncontrado 
        });
    },
}



module.exports = postsController;