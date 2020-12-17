const { admin, registration } = require(".");

module.exports=(connection,Sequelize)=>{
    const registration=connection.define('registration',{
        user_id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        first_name:{
            type:Sequelize.STRING
        },
        last_name:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING,
            unique: true
        },
        password:{
            type:Sequelize.STRING
        },
        role:{
            type: Sequelize.ENUM('user','admin'),
            allowNull:false
            },
        },
        {
        freezeTableName: true,
        timestamps: false
         });


return registration;
};

