var express = require('express');
const mongoose = require('mongoose');
const uuid = require('uuid');
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
router.get('/feedbacks', function(req, res, next) {
  feedbackmodel.find({}).then(function(data){
    res.json(data);
  }).catch(function(err){
    res.send(err);
  })
});

router.post('/feedback',function(req,res,next) {
  var feedback = new feedbackmodel(req.body);
  feedback.id = uuid.v1();
  feedback.save()
          .then(function(feedback) {
            setTimeout(
              () => {
                res.send(feedback)},2000);
          })
          .catch(function(err){
            setTimeout(
              () => {
                res.send(err)},2000);
          });
});
router.post('/test',function(req,res,next) {
 setTimeout(
   () => {
     res.send("HEELO")},2000);
});
module.exports = router;
