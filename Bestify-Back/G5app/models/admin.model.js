const { Sequelize, registration } = require(".");

module.exports=(connection,Sequelize)=>{
    const admin=connection.define('admin',{
        admin_id:{
            type:Sequelize.INTEGER,
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
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    return admin;
};

