const db= require("../models");
// const db = require("../models");
const Quiz = db.quiz;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  
    Quiz.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Quiz."
      });
    });
  };
  

exports.findBySets = (req, res) => {
    Quiz.findAll({
      where:{
         category : req.params.category,
      }
    }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving question."
        });
      });
  };