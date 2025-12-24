import userModel from '../Models/user.model.js';
import * as userServices from '../Services/user.services.js';
import {validationResult} from 'express-validator';

export const createUserController = async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    try{
        const user = await userServices.createUser({email,password});
        const token = user.generateJWT();

        res.status(201).json({user,token});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}