import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        maxLength:[50,'Email can be at most 50 characters long' ],
    },
    password:{
        type:String,
        required:true,
        select:false,
      

    }
})

UserSchema.statics.hashPassword= async function(password){
     return await bcrypt.hash(password,10)
}

UserSchema.methods.isvalidpassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

UserSchema.methods.generateJWT=function(){
    return JWT.sign({email:this.email},process.env.JWT_SECRET)
}


const User=mongoose.model('user',UserSchema);

export default User;