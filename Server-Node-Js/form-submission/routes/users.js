var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var feedbackmodel = require('../models/feedback');
const url = "mongodb://localhost/aymenxyz";

mongoose.connect(url,{ useNewUrlParser: true });


mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

var user = {'name ' : "aymen",'lastname' : "bkl"}
/* GET users listing. */
router.get('/', function(req, res, next) {
  feedbackmodel.find({}).then(function(data){
    res.json(data);
  }).catch(function(err){
    console.log("errrrrrr",err);
  })
});

router.post('/post',function(req,res,next) {
  var feedback = new feedbackmodel(req.body);
  feedback.save()
          .then(function(feedback) {
            res.json(feedback);
          })
          .catch(function(err){
            res.send(err);
          });
});
module.exports = router;
