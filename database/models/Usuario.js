module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario"

    let cols = { 
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        email : {
            type : dataTypes.STRING
        },
        username : {
            type : dataTypes.STRING
        },
        foto : {
            type : dataTypes.STRING
        },
        password : {
            type : dataTypes.STRING
        },
        nacimiento : {
            type : dataTypes.DATE
        },
        DNI : {
            type : dataTypes.INTEGER
        }
    }

    let config = {
        tableName : "usuarios",
        timestamps : false,
        underscored : false
    }

    let Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function(models){
        Usuarios.hasMany(models.Posteo, {
            as : "posteos_usuario",
            foreignKey : "userId"
        })
        Usuarios.hasMany(models.Comentario, {
            as : "comentarios_usuario",
            foreignKey : "userId"
        })
    }

    return Usuarios ;
}

