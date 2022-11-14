/* 1er paso: Exportar funcion */
module.exports = function (sequelize, dataTypes) {
    
    /* 2do paso: crear u alias para que sequelize sepa con cual modelo debe conectar */
    let alias = "Comentario" // contiene una string

    /* 3er paso: Es crear una variable con la estructura de la tabla....*/
    let cols = {  // va a ser un objeto literal que va a tener lo siguiente
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        texto : {
            type : dataTypes.STRING
        },
        userId : {
            type : dataTypes.INTEGER
        },
        postId : {
            type : dataTypes.INTEGER
        }
    }

    /* 4to paso: crear un objeto literal con la configuracion de la tabla */
    let config = {
        tableName : "comentarios",
        timestamps : false,
        underscored : false //recibe un valor booleano para determinar si la tabla tiene dentro de su nombre de columna guion bajo.
    }

    /* 5to paso: crear el metodo define() con los 3 parametros */
    let Comentarios = sequelize.define(alias, cols, config);

    /* 6to paso: retornar el valor del modelo */
    return Comentarios ;
}
