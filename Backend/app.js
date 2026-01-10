
import express from 'express';
import morgan from 'morgan';
import connect from './DB/db.js';
import userRoutes from './Routes/user.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

connect();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // frontend URL
    credentials: true,
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],  // allowed methods
    allowedHeaders: ['Content-Type','Authorization'] // allowed headers              // agar cookies ya auth bhejni ho
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('hello world');
});

export default app;