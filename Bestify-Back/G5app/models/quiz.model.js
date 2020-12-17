const { connect } = require("../routes");

module.exports = (connection, Sequelize) => {
    const Quiz = connection.define("Quiz", {
      category: {
        type: Sequelize.STRING
      },
      sets: {
        type: Sequelize.STRING
      },
      questionno:{
        type:Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING
      },
      option1: {
        type: Sequelize.STRING
      },
      option2: {
        type: Sequelize.STRING
      },
      option3: {
        type: Sequelize.STRING
      },
      option4: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    });

    return Quiz;
  };