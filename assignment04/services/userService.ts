import userDB from '../models/userModel'
import { Request,Response,NextFunction } from 'express'

const allUserService = async(req : Request,res : Response,next : NextFunction) => {
   try {
    const users = await userDB.find();
    res.status(200).json({con : true,msg : 'All Users',data : users})
   } catch (err) {
    next(err);
   }
}

const postUserService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const data = await new userDB(req.body).save();
        res.status(201).json({con : true,msg : 'New User Added',data});
    } catch (err) {
        next(err);
    }
}

const singleUserService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const singleUser = await userDB.findById(req.params.id);
        if(singleUser){
            res.status(200).json({con : true,msg : 'Get Single User',data : singleUser})
        }else{
            next(new Error('No user with this id!'));
        }
    } catch (err) {
        next(err);
    }
}

const updateUserService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const user = await userDB.findById(req.params.id);
        if(user){
            await userDB.findByIdAndUpdate(user._id,req.body);
            const updateUser = await userDB.findById(req.params.id);
            res.status(200).json({con : true,msg : 'Update User Successfully',data : updateUser})
        }else{
            next(new Error('No user with this id!'));
        }
    } catch (err) {
        next(err)
    }
}

const delUserService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        await userDB.findByIdAndDelete(req.params.id);
        res.status(200).json({con : true,msg : 'Delete User Successfully'});
    } catch (err) {
        next(err);
    }
}

export {allUserService,postUserService,singleUserService,updateUserService,delUserService}