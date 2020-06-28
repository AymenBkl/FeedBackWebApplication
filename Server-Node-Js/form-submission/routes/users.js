var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var feedbackmodel = require('../models/feedback');
const url = "mongodb://localhost:27017/aymenxyz";

mongoose.connect(url);


mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

var user = {'name ' : "aymen",'lastname' : "bkl"}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(user);
});

router.post('/post',function(req,res,next) {
  console.log(req.body);
});
module.exports = router;
