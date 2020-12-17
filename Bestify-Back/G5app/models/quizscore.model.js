module.exports = (sequelize, Sequelize) => {
    const quiz_score = sequelize.define("quiz_score", {
      category: {
        type: Sequelize.STRING
      },
      sets: {
        type: Sequelize.STRING
      },
      score:{
        type:Sequelize.INTEGER
      },
      time:{
        type:Sequelize.TIME
      },
      time_duration:{
          type:Sequelize.TIME
      },
      user_id:{
        type:Sequelize.INTEGER,
        primaryKey:true
      },
    },
    {
        timestamps: false,
        freezeTableName: true,
    });
  
    return quiz_score;
  };
