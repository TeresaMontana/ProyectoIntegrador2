const db = require('../database/models'); // requerimos a la db
const User = db.Usuario; // Creamos la variable User que  usa el modulo Usuario de la db
const bycript= require('bcryptjs');  //Creamos variable bcrypt y requerimos el modulo de bcryptjs 
//para saber que tengo este modulo, vamos a node modules y buscamos bcryptjs, si no esta es porque
//no hicimos npm i bcryptjs 

//creamos la constante usersController
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
            if (data.listadoPosteos[i].dni == usuario.dni) {
                posteos.push(data.listadoPosteos[i]);
            }
        }

        usuario.posteos = posteos;

        return res.render("detalleUsuario", {info: usuario, Post: posteos});

        // res.send(usuario)
        
            
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
            if (data.listadoUsuario[i].dni == idUsuario) {
                usuario = data.listadoUsuario[i];
            }
        }

        // variable para guardar los posteos del usuario
        let posteos = []

        for (let i = 0; i < data.listadoPosteos.length; i++) {
            if (data.listadoPosteos[i].dni == usuario.dni) {
                posteos.push(data.listadoPosteos[i]);
            }
        }

        usuario.posteos = posteos;

        return res.render("miPerfil", {info: usuario, Post: posteos});

        // res.send(usuario)
            
    },


    //Creamos los metodos del controlador, metodo registracion; con funcion que recibe un req y un res
    //que me develve la vista registracion

    registracion: function (req, res) {
        if (!res.locals.user) {
            return res.render("registracion");
        } else {
            return res.redirect('/')
        }
    },

    store: (req, res) => { //funcion flecha 
            let errors = {};
    
            if (req.body.usuario == "") {
                errors.message = "El campo nombre esta vacio";
                res.locals.errors = errors;   //me permite llevar info a las vistas. 
                return res.render('registracion');
    
            } else if(req.body.email == ""){
                errors.message = "El campo email esta vacio";
                res.locals.errors = errors;
                return res.render('registracion');

            } else if(req.body.password.length <= 3){
                errors.message = "El campo contrasenia esta vacio";
                res.locals.errors = errors;
                return res.render('registracion');

            } else if(req.body.FotodePerfil == ""){
                errors.message = "Por favor suba una foto de perfil";
                res.locals.errors = errors;
                return res.render('registracion');

            } else {
            let usuarioNuevo = req.body;
            let FotodePerfil = req.file.filename;

            let user ={
                name:usuarioNuevo.usuario,
                email:usuarioNuevo.email,
                img : FotodePerfil,
                password:bycript.hashSync(usuarioNuevo.password,10),
                fecha: usuarioNuevo.fecha,
                dni : usuarioNuevo.dni, }

              
                Usuarios.findOne({
                    where: {
                        email: user.email
                    }
                })
                .then((result) => {
                    if (result) {
                        errors.message = "El email ya esta registrado";
                        res.locals.errors = errors;
                        return res.render('registracion');
                    } else {
                        Usuarios.create(user)
                        .then((result) => {
                            res.redirect('/users/login')
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            }
    
        },

login:(req,res)=>{
    return res.render('login')
},
loginPost:(req,res)=>{
    let info = req.body;
    let filtro={
        where:[{email:info.email}]
    }
    User.findOne(filtro)
    .then((result)=>{
        if(result!=null){
            let passEncriptada= bycript.compareSync(info.password,result.password);
            if(passEncriptada){
                req.session.user = result.dataValues; //aca el usuario ya esta en sesion  
                
                if (info.rememberme != undefined) { // req.body = solo info, porque la llamamos mas arriba
                    res.cookie('userId', result.dataValues.id, {maxAge:1000 * 60 *10}) 
                }

                return res.redirect('/miPerfil')
            }else{
                return res.send('La clave no coincide')
            }
        }
    })
    .catch(error=>console.log(error))
   
},
logout:(req,res)=>{
    /* Destruir la session */

    /* Destruir la cookie */
    return res.render('login');
},

}

module.exports= usersController
