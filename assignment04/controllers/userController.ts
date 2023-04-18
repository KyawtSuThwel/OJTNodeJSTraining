import { Request,Response,NextFunction } from "express";
import { allUserService, delUserService, postUserService, singleUserService, updateUserService } from "../services/userService";

const allUser = (req : Request,res : Response,next : NextFunction) => {
    allUserService(req,res,next);
}

const postUser = (req : Request,res : Response,next : NextFunction) => {
    postUserService(req,res,next);
}

const singleUser = (req : Request,res : Response,next : NextFunction) => {
    singleUserService(req,res,next);
}

const updateUser = (req : Request,res : Response,next : NextFunction) => {
    updateUserService(req,res,next);
}

const delUser = (req : Request,res : Response,next : NextFunction) => {
    delUserService(req,res,next);
}

export {allUser,postUser,singleUser,updateUser,delUser}