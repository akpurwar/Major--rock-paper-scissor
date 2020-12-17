
module.exports = (sequelize, Sequelize) => {
    const game = sequelize.define("game", {
        id:{
            primaryKey:true,
            type:Sequelize.INTEGER,
            allowNull:false,
            autoIncrement:true
        },
        game_id:{
            type:Sequelize.INTEGER
        },
        game_name:{
            type:Sequelize.STRING
        },
        score:{
            type:Sequelize.STRING
        },
        time_duration:{
            type:Sequelize.TIME
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    return game;
  };
