const usersController = {
    
    detalleUsuario: function(req,res){
        return res.render("detalleUsuario")
            
    },
    editarPerfil: function(req,res){
        return res.render("editarPerfil")
            
    },
    login: function(req,res){
        return res.render("login")
            
    },
    miPerfil: function(req,res){
        return res.render("miPerfil")
            
    },
    registracion: function(req,res){
        return res.render("registracion")
            
    }

}



module.exports= usersController;