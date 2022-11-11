module.exports = function(sequelize, dataTypes){
    
    let alias = "Posteos"
  
    let cols = {
Postid:{
    autoincrement: true,
    primaryKey: true,
    type: dataTypes.INTEGER
    },

dni:{
    type: dataTypes.INTEGER
    },

texto:{
    type:dataTypes.STRING
}
}

    }
    
let config = {
        tableName: "PONER NOMBRE DE LA TABLA",
        timestamps: false,
    }
    
let Users= sequelize.define(alias, cols, config);

return Posteos ;


