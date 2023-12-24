const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const HistorySource = new Schema({
    username : {type : String},
    ma : { type : String },
    time : { type : Date },
    link : {type : String }    
});

module.exports = mongoose.model("HistorySource" , HistorySource)