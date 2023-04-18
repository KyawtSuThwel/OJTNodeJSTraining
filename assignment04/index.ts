import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter';
import postRouter from './routes/postRouter'
import { Request,Response,NextFunction } from 'express';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/users',userRouter);
app.use('/posts',postRouter);

app.use((err : {status : number,message : string},req : Request,res : Response,next : NextFunction) => {
    err.status = err.status || 500;
    res.status(err.status).json({
        con : false,
        message : err.message
    })
})

mongoose.connect(process.env.DB || '')
    .then(() => console.log('Database is connected'));

app.listen(process.env.PORT,()=> console.log(`Server is running on port ${process.env.PORT}`));