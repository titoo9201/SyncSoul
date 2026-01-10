import userModel from '../Models/user.model.js';
import * as userServices from '../Services/user.services.js';
import {validationResult} from 'express-validator';
import redisClient  from '../Services/redis.services.js';
// register karega user
export const createUserController = async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    try{
        const user = await userServices.createUser({email,password});
        const token = user.generateJWT();
        delete user._doc.password; // password response me na jaye

        res.status(201).json({user,token});
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

// login karega user
export const loginUserController= async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
   
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email}).select('+password');
        if(!user)
        {
            return res.status(401).json({error:"user not found"})
        }
       const isMatch= await user.isValidPassword(password);
       if(!isMatch)
       {
        return res.status(401).json({error:"invalid password"})
       }

       const token = user.generateJWT();
       delete user._doc.password; // password response me na jaye
       res.status(200).json({user,token});
    }catch(error){
        res.status(400).json({error:error.message});
    }


}

// profile controller 
export const profileController = async (req,res)=>{
    try{
        const user = await userModel.findOne({email: req.user.email});
        res.status(200).json({user});
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

// logout controller
export const logoutController= async (req,res)=>{
    try{
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        redisClient.set(token, 'logout', 'EX', 60*60*24); // 24 hours expiry
        res.status(200).json({message:"logged out successfully"});
    }catch(error){
        res.status(400).json({error:error.message});
    }
}