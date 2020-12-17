const db= require("../models");
// const db = require("../models");
const Quiz = db.quiz;
const Op = db.Sequelize.Op;


// find all sets according particular category
exports.findAllSets = (req, res) => {
//taking category from Url query
  const category = req.query.category;
  Quiz.findAll({ where:{
    category:category
  } 
  ,attributes: ['id', 'sets']
    , group: ['sets']})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sets."
      });
    });
};

// find all Questions according particular set number
exports.findAllQues = (req, res) => {
  //taking set from Url query
    // const set = req.query.set;
    // Quiz.findAll({ where:{
    //   set:set
    // } 
    // ,attributes: ['id',"questionno"]
    //   , group: ['set'],distinct: true})
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while retrieving Sets."
    //     });
    //   });
  };
// exports.findAllSets = (req, res) => {
//   Quiz.findAll({ where: { category:req.data } })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving Sets."
//         });
//       });
//   };



exports.create = (req, res) => {
  // Validate request
  if (!req.body.category) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Quiz question
  const quiz= {
    category:req.body.category,
    sets:req.body.sets,
    questionno:req.body.questionno,
    question:req.body.question,
    option1:req.body.option1,
    option2:req.body.option2,
    option3:req.body.option3,
    option4:req.body.option4,
    answer:req.body.answer,
  };
  console.log(quiz);
  // Save Quiz question in the database
  Quiz.create(quiz)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

