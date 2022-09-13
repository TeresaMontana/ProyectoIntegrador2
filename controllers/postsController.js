const data = require('../db/data');

const postsController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
    },
    detallePost: function(req, res) {
        let idPosteo = req.params.id
        let encontrarPosteo = data.listadoPosteos
        res.render('detallePost', {
            miLista: encontrarPosteo //mal. Encontrar 1 posteo. Ver como sse hace en las clases 
        });
    },
}



module.exports = postsController;