const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const User = new Schema({
    username : { type : String },
    password : { type : String },
    isAdmin : { type : Boolean , default : false },
    surplus : {type : Number , default : 0}
});

module.exports = mongoose.model("Users" , User)