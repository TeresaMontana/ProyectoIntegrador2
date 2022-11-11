module.exports = function(sequelize, dataTypes){
    
    let alias = "Users"
  
    let cols = {
id:{
    autoincrement: true,
    primaryKey: true,
    type: dataTypes.INTEGER
    },

email:{
    type: dataTypes.STRING
    },

username:{
    type:dataTypes.STRING
},

password:{
    type: dataTypes.STRING
    },

nacimiento:{
     type: dataTypes.INTEGER
     },

UsuarioPosteos:{
     type: dataTypes.INTEGER
    },
    
seguidores:{
    type: dataTypes.INTEGER
     },
      
seguidos:{
   type: dataTypes.INTEGER
     },

dni:{
    type: dataTypes.INTEGER
     },
           
}
   }

let config = {
    tableName: "PONER NOMBRE DE LA TABLA",
    timestamps: false,
    underscord: false
}

let Users= sequelize.define(alias, cols, config);

return Users ;
