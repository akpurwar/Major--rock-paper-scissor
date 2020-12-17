var express = require('express');
var router = express.Router();


const game=require("../controllers/game.controller");
/* GET users listing. */
router.get("/",game.findAll);

/* GET QUIZZES by Category */
router.get("/game_id", game.findByGameId);

// router.post("/",game.create);

module.exports = router;

