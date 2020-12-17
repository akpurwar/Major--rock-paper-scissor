var express = require('express');
var router = express.Router();


const login=require("../controllers/login.controller")
/* GET users listing. */
router.get("/",login.findAll);
router.put("/",login.Update);
module.exports = router;
