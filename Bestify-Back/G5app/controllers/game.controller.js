const db= require("../models");
const game = db.game;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

  game.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Games."
      });
    });
};
exports.findByGameId = (req, res) => {
    console.log("hello");
    game.findAll({
      where:{
        game_id: 101
      }
    }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Game."
        });
      });
  };
  exports.findByGameId = (req, res) => {
    console.log("hello");
    game.findAll({
      where:{
        game_id: 102
      }
    }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Game."
        });
      });
  };