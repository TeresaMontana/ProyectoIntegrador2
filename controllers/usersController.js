const data = require('../db/data');

const usersController = {
    
    detalleUsuario: function(req,res){
        return res.render("detalleUsuario");
            
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
        return res.render("miPerfil", {info: data.listadoUsuario[0], post: data.listadoPosteos}); 
        //ponemos el indice cero para indicar que queremos el cero
            
    },
    registracion: function(req,res){
        return res.render("registracion");
            
    }

}



module.exports= usersController;