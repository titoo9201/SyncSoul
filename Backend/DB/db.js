import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

function connect(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("database conneted succefully ");
        
    }).catch((err)=>{
        console.log("database connection failed");
        console.log(err);
    })
}

export default connect;