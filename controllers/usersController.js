const db = require('../database/models');
const Usuarios = db.Usuario;
const bycript = require('bcryptjs');


const usersController = {

    detalleUsuario: function (req, res) {

        let idUsuario = req.params.id;

        Usuarios.findByPk(idUsuario, {
            include: [
                { association: "posteos_usuario", include: 'comentarios_posteo' },
                { association: "comentarios_usuario" }
            ]
        })
            .then(function (usuario) {
                // res.send(usuario)
                res.render('detalleUsuario', {usuario:usuario})
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    editarPerfil: function (req, res) {
        if (!res.locals.user) {
            res.render('editarPerfil')
        }else{
            res.redirect('/login')
        }
        // return res.render("editarPerfil", { info: data.listadoUsuario, indice: req.params.id }); //req hace referencia al pedido del usuario y el res a la respuesta que le da el servidor
        //req es un obj literal que esta en el navegador, y param tambien y esta adentro; y el .id porque es el nombre tiene que coincidir con el nombre que le ponemos en la ruta. 
        //no pongo indice de usurio porque yo quiero todos, no solo el primero
    },
    actualizarPerfil: function (req, res) {
        let body = req.body;
        let idUsuario = req.params.id;

        Usuarios.update({
            email: body.email,
            username: body.nombre,
            foto: req.file.filename,
            password: bycript.hashSync(body.password, 10),
            nacimiento: body.nacimiento,
            DNI: body.dni,
        }, {
            where: {
                id: idUsuario
            }
        })
            .then(function (usuario) {
                res.redirect('/')
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    loginPost: function (req, res) {
        if (req.body.email !== "" && req.body.password !== "") {
            if (!res.locals.user) {
                Usuarios.findOne({
                    where: {
                        email: req.body.email
                    }
                })
                    .then(function (usuario) {
                        if (usuario) {
                            if (bycript.compareSync(req.body.password, usuario.password)) {
                                req.session.user = usuario.dataValues;
                                if (req.body.recordame === "true") {
                                    res.cookie('recordame', usuario.email, { maxAge: 1000 * 60 * 60 * 24 * 7 })
                                }
                                return res.redirect('/')
                            } else {
                                return res.render('login', { errors: { password: { msg: 'Contraseña incorrecta' } } })
                            }
                        } else {
                            return res.render('login', { errors: { email: { msg: 'No se encuentra registrado' } } })
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            } else {
                return res.redirect('/')
            }
        } else {
            return res.render('login', { errors: { email: { msg: 'El campo emial debe estar completo' } } })
        }

    },
    miPerfil: function (req, res) {
        if (res.locals.user) {
            let idUsuario = res.locals.user.id;

            Usuarios.findByPk(idUsuario, {
                include: [
                    { association: "posteos_usuario", include: 'comentarios_posteo' },
                    { association: "comentarios_usuario" }
                ],
                order: [["createdAt", "ASC"], ["posteos_usuario", "comentarios_posteo", "createdAt", "ASC"]]
            })
                .then(function (usuario) {
                    // res.send(usuario)
                    res.render('miPerfil', {usuario:usuario})
                })
                .catch(function (error) {
                    console.log(error)
                })
        } else {
            return res.redirect('/users/login')
        }

    },
    registracion: function (req, res) {
        if (!res.locals.user) {
            return res.render("registracion");
        } else {
            return res.redirect('/')
        }
    },
    store: (req, res) => {
        let errors = {};

        if (req.body.usuario == "") {
            errors.message = "El campo nombre esta vacio";
            res.locals.errors = errors;   //me permite llevar info a las vistas. 
            return res.render('registracion');

        } else if (req.body.email == "") {
            errors.message = "El campo email esta vacio";
            res.locals.errors = errors;
            return res.render('registracion');

        } else if (req.body.password.length <= 3) {
            errors.message = "El campo contrasenia esta vacio";
            res.locals.errors = errors;
            return res.render('registracion');

        } else if (req.body.FotodePerfil == "") {
            errors.message = "Por favor suba una foto de perfil";
            res.locals.errors = errors;
            return res.render('registracion');

        } else {
            let usuarioNuevo = req.body;
            let FotodePerfil = req.file.filename;

            let user = {
                email: usuarioNuevo.email,
                username: usuarioNuevo.usuario,
                foto: FotodePerfil,
                password: bycript.hashSync(usuarioNuevo.password, 10),
                nacimiento: usuarioNuevo.fecha,
                DNI: usuarioNuevo.dni,
            }

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
    login: (req, res) => {
        if (!res.locals.user) {
            return res.render('login')
        } else {
            return res.redirect('/')
        }
    },
    // loginPost: (req, res) => {
    //     let info = req.body;
    //     let filtro = {
    //         where: [{ email: info.email }]
    //     }
    //     Usuarios.findOne(filtro)
    //         .then((result) => {
    //             if (result != null) {
    //                 let passEncriptada = bycript.compareSync(info.password, result.password);
    //                 if (passEncriptada) {
    //                     req.session.usuarioLogueado = result;
    //                     return res.redirect('/')
    //                 } else {
    //                     return res.send('La clave no coincide')
    //                 }
    //             }
    //         })
    //         .catch(error => console.log(error))

    // },
    logout: (req, res) => {
        /* Destruir la session */
        req.session.destroy();
        /* Destruir la cookie */
        res.clearCookie('recordame')
        return res.redirect('/')
    },

}

module.exports = usersController
