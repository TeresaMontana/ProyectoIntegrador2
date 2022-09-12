const data = require('../db/data');

const postsController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
    },
    detallePost: function(req, res) {
        let idPosteo = req.params.id
        let encontrarPosteo = data.listadoPosteos
        res.render('detallePost', {
            miLista: encontrarPosteo
        });
    },
}



module.exports = postsController;