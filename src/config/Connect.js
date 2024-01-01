const  mongoose  = require("mongoose");
require('dotenv').config()
async function Connect(){
    try{
        await mongoose.connect(process.env.URL_WEB,{
            useNewUrlParser : true ,
            useUnifiedTopology : true
        });
        console.log("Connect successfully !!!");
    }catch(error){
        console.log("Connect error !!!")
    }
}

module.exports = { Connect }
