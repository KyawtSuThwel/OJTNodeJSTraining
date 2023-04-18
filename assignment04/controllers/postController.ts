import { Request,Response,NextFunction } from "express";
import { allPostService, delPostService, postService, singlePostService, updatePostService } from "../services/postService";

const allPost = (req : Request,res : Response,next : NextFunction) => {
    allPostService(req,res,next);
}

const post = (req : Request,res : Response,next : NextFunction) => {
    postService(req,res,next);
}

const singlePost = (req : Request,res : Response,next : NextFunction) => {
    singlePostService(req,res,next);
}

const updatePost = (req : Request,res : Response,next : NextFunction) => {
    updatePostService(req,res,next);
}

const delPost = (req : Request,res : Response,next : NextFunction) => {
    delPostService(req,res,next);
}

export {allPost,post,singlePost,updatePost,delPost}