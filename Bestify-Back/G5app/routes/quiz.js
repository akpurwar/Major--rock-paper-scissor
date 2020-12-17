var express = require('express');
var router = express.Router();


const quiz=require("../controllers/quiz.controller")
/* GET users listing. */
router.get("/sets",quiz.findAllSets);

router.get("/ques",quiz.findAllQues);

/* GET QUIZZES by Category */
//  router.get("/bt",quiz.findByBTCategory);

// router.get("/lt",quiz.findByLTCategory);

// router.get("/gk",quiz.findByGKCategory);

router.post("/",quiz.create);

module.exports = router;

