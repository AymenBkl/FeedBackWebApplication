var express = require('express');
var router = express.Router();
var user = {'name ' : "aymen",'lastname' : "bkl"}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(user);
});

router.post('/post',function(req,res,next) {
  console.log(req.body);
});
module.exports = router;
