import jwt from 'jsonwebtoken';
import redisClient from '../Services/redis.services.js';

export const authUser= async (req,res,next)=>{
    try{
        const token =  req.cookies.token || req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).send({err:"Unauthorized user "})
        }
        const isblacklisted= await redisClient.get(token);

        if(isblacklisted){
            res.clearCookie('token');
            return res.status(401).send({err:"unauthorized user"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    } catch(err){
        res.status(401).send({err:"unauthorized user"})
    }
}