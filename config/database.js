const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = ()=>{
    try{
    mongoose.connect(process.env.DATABASE_URL, 
        {    
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
console.log("Database connected successfully");
    }catch(err){
        console.log(err);
    }

}
module.exports=dbConnect;