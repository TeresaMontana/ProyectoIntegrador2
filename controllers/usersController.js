const data = require('../db/data');

const usersController = {
    
    detalleUsuario: function(req,res){
        
        let idUsuario = req.params.id;

        // vairable para guardar el usuario encontrado
        let usuario = {}
        
        for (let i = 0; i < data.listadoUsuario.length; i++) {
            if (data.listadoUsuario[i].dni == idUsuario) {
                usuario = data.listadoUsuario[i];
            }
        }

        // variable para guardar los posteos del usuario
        let posteos = []

        for (let i = 0; i < data.listadoPosteos.length; i++) {
            if (data.listadoPosteos[i].usuario.dni == idUsuario) {
                posteos.push(data.listadoPosteos[i])
            }
        }
        return res.render("detalleUsuario", {info: usuario, Post: posteos});
        
            
    },
    editarPerfil: function(req,res){
        return res.render("editarPerfil", {info: data.listadoUsuario, indice: req.params.id}); //req hace referencia al pedido del usuario y el res a la respuesta que le da el servidor
                                                                        //req es un obj literal que esta en el navegador, y param tambien y esta adentro; y el .id porque es el nombre tiene que coincidir con el nombre que le ponemos en la ruta. 
        //no pongo indice de usurio porque yo quiero todos, no solo el primero
            
    },
    login: function(req,res){
        return res.render("login");
            
    },
    miPerfil: function(req,res){
        
        let idUsuario = req.params.id;

        // vairable para guardar el usuario encontrado
        let usuario = {}
        
        for (let i = 0; i < data.listadoUsuario.length; i++) {
            if (data.listadoUsuario[i].id == idUsuario) {
                usuario = data.listadoUsuario[i];
            }
        }

        // variable para guardar los posteos del usuario
        let posteos = []

        for (let i = 0; i < data.listadoPosteos.length; i++) {
            if (data.listadoPosteos[i].usuario.id == idUsuario) {
                posteos.push(data.listadoPosteos[i])
            }
            // por que usuario.id? 
        }
        
        return res.render("miPerfil", {info: usuario, Post: posteos});
            
    },
    registracion: function(req,res){
        return res.render("registracion");
            
    }

}



module.exports= usersController;