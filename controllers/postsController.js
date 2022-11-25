const db = require("../database/models");
const Posteos = db.Posteo;

const postsController = {
  detallePost: function (req, res) {
    let idPosteo = req.params.id;

    Posteos.findByPk(idPosteo, {
      include: [
        { association: "usuario" },
        { association: "comentarios_posteo", include: "usuario_comentario" },
      ],
      order: [["comentarios_posteo", "createdAt", "ASC"]],
    })
      .then(function (posteo) {
        // res.send(posteo)
        res.render("detallePost", { posteo: posteo });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  vista_agregarPost: function (req, res) {
    if (res.locals.user) {
      res.render("agregarPost");
    } else {
      res.redirect("/users/login");
    }
  },
  store_agregarPost: function (req, res) {
    let body = req.body;

    if (body.texto === undefined) {
      res.render("agregarPost", {
        error: "El campo TEXTO no puede estar vacío",
      });
    } else {
      if (req.file.filename === undefined) {
        res.render("agregarPost", {
          error: "El campo FOTO no puede estar vacío",
        });
      } else {
        Posteos.create({
          foto: req.file.filename,
          texto: body.texto,
          userId: res.locals.user.id,
        })
          .then(function (post) {
            res.redirect("/");
          })
          .catch(function (error) {
            res.render("agregarPost", {
              error: "Error al guardar el post",
            });
          });
      }
    }
  },
  vista_editarPost: function (req, res) {
    let idPosteo = req.params.id;
    if (res.locals.user) {
      Posteos.findByPk(idPosteo)
        .then(function (posteo) {
          if (posteo.userId === req.session.user.id) {
            res.render("editarPost", { posteo: posteo });
          } else {
            res.redirect("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      res.redirect("/users/login");
    }
  },
  store_editarPost: function (req, res) {
    let idPosteo = req.params.id;
    let body = req.body;

    if (body.texto === undefined) {
      res.render("editarPost", {
        error: "El campo TEXTO no puede estar vacío",
      });
    } else {
      if (req.file.filename === undefined) {
        res.render("editarPost", {
          error: "El campo FOTO no puede estar vacío",
        });
      } else {
        if (body.eliminarFoto === "on") {
          Posteos.destroy({
            where: {
              id: idPosteo,
            },
          });
        } else {
          Posteos.update(
            {
              foto: req.file.filename,
              texto: body.texto,
            },
            {
              where: {
                id: idPosteo,
              },
            }
          )
            .then(function (post) {
              res.redirect("/");
            })
            .catch(function (error) {
              res.render("editarPost", {
                error: "Error al guardar el post",
              });
            });
        }
      }
    }
  },
  store_comentario: function (req, res) {
    let idPosteo = req.params.id;
    let body = req.body;

    if (body.texto === undefined) {
      res.render("detallePost", {
        error: "El campo TEXTO no puede estar vacío",
      });
    } else {
      db.Comentario.create({
        texto: body.texto,
        userId: req.session.user.id,
        postId: idPosteo,
      })
        .then(function (comentario) {
          res.redirect("/detallePost/" + idPosteo);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
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
};

module.exports = postsController;

