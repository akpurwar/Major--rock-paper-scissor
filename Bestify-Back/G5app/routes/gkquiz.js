var express = require('express');
var router = express.Router();

const gkquiz=require("../controllers/gkquiz.controller");


/* GET users listing. */
router.get("/",gkquiz.findAll);

/* GET QUIZZES by Category */
router.get("/:category", gkquiz.findBySets);

// router.post("/",game.create);

module.exports = router;