//los modelos son funciones que reciben 2 paramteros (sequelize y datatypes)

module.exports = function(sequelize, dataTypes){
    
    let alias = "Comentarios"
  
    let cols = {
id:{
    autoincrement: true,
    type: dataTypes.INTEGER
    },

Postid:{
    type: dataTypes.INTEGER
    },

dni:{
    type:dataTypes.INTEGER
},

Comentario:{
    type: dataTypes.STRING
    },
}

    }

let config = {
        tableName: "PONER NOMBRE DE LA TABLA",
        timestamps: false,
    }

let Users= sequelize.define(alias, cols, config);


return Comentarios;

