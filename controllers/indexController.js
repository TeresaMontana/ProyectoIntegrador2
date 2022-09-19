const data = require('../db/data');

const indexController = {
    home: function(req,res){

        let listadoPosteos = data.listadoPosteos

        //let usuario = {}
        
        //for (let i = 0; i < data.listadoUsuario.length; i++) {
           // if (data.listadoUsuario[i].dni == idUsuario) {
           //     usuario = data.listadoUsuario[i];
          //  }
        //}
        
        //let posteo = 
        //for (let i = 0; index < data.listadoPosteos.length; i++) {
           //if(data.listadoPosteo[i].usuario.dni == posteo.dni){

           //}
            
       // }
        
        
        
        
        listadoPosteos.forEach(posteo => {
            posteo.usuario = data.listadoUsuario.find(usuario => usuario.userId === posteo.PostId)
            posteo.comentarios = data.listadoComentarios.filter(comentario => comentario.PostId === posteo.PostId)
            posteo.comentarios.forEach(comentario => {
                comentario.usuario = data.listadoUsuario.find(usuario => usuario.dni == comentario.dni)
            })
        })

        res.render('index', {posteos:listadoPosteos})


    },
    busqueda:  function(req,res){
        res.render('resultadoBusqueda')
    },
}


module.exports = indexController