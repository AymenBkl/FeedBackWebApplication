var mongoose = require('mongoose');

var feedback = new mongoose.Schema({
    id : {type:String,required:true},
    firstName : {type:String,required:true},
    lastName : {type:String,required:true},
    email : {type:String,required:true},
    rating : {type:String,required:true},
    feedbackMessage : {type:String,required:true}

});

module.exports = mongoose.model('Feedback',feedback);