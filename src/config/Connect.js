const  mongoose  = require("mongoose");
require('dotenv').config()

async function Connect(){
    
    try{
        const test = process.env.URL_WEB;
        await mongoose.connect("mongodb+srv://ttluan1103:cac123123@fullstack.vrnxzmb.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser : true ,
            useUnifiedTopology : true
        });
        console.log("Connect successfully !!!");
    }catch(error){
        console.log("Connect error !!!")
    }
}

module.exports = { Connect }
