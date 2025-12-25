
import express from 'express';
import morgan from 'morgan';
import connect from './DB/db.js';
import userRoutes from './Routes/user.route.js';
import cookieParser from 'cookie-parser';
connect();
const app=express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/api/users',userRoutes);
app.get('/',(req,res)=>{
    res.send("hello world");
})

export default app;