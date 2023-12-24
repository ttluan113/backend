const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const Source = new Schema({
    img : { type : String },
    ma : { type : String },
    price : { type : Number , default : 0 },
    imgdetail1 : { type : String},
    pricestring : { type : String},
    imgdetail2 : { type : String},
    imgdetail3 : { type : String},
    slug : {type : String},
    link : {type : String}
});

module.exports = mongoose.model("Source" , Source)