import postDB from '../models/postModel'
import { Request,Response,NextFunction } from 'express'

const allPostService = async(req : Request,res : Response,next : NextFunction) => {
   try {
    const posts = await postDB.find().populate('user','-_id -__v').sort({createdAt : -1});
    res.status(200).json({con : true,msg : 'All Posts',data : posts})
   } catch (err) {
    next(err);
   }
}

const postService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const data = await new postDB(req.body).save();
        res.status(201).json({con : true,msg : 'New Post Added',data});
    } catch (err) {
        next(err);
    }
}

const singlePostService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const singlePost = await postDB.findById(req.params.id).populate('user');
        if(singlePost){
            res.status(200).json({con : true,msg : 'Get Single Post',data : singlePost})
        }else{
            next(new Error('No post with this id!'));
        }
    } catch (err) {
        next(err);
    }
}

const updatePostService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        const post = await postDB.findById(req.params.id);
        if(post){
            await postDB.findByIdAndUpdate(post._id,req.body);
            const updatePost = await postDB.findById(req.params.id);
            res.status(200).json({con : true,msg : 'Update Post Successfully',data : updatePost})
        }else{
            next(new Error('No post with this id!'));
        }
    } catch (err) {
        next(err)
    }
}

const delPostService = async(req : Request,res : Response,next : NextFunction) => {
    try {
        await postDB.findByIdAndDelete(req.params.id);
        res.status(200).json({con : true,msg : 'Delete Post Successfully'});
    } catch (err) {
        next(err);
    }
}

export {allPostService,postService,singlePostService,updatePostService,delPostService}