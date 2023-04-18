"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delPostService = exports.updatePostService = exports.singlePostService = exports.postService = exports.allPostService = void 0;
const postModel_1 = __importDefault(require("../models/postModel"));
const allPostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield postModel_1.default.find().populate('user', '-_id -__v').sort({ createdAt: -1 });
        res.status(200).json({ con: true, msg: 'All Posts', data: posts });
    }
    catch (err) {
        next(err);
    }
});
exports.allPostService = allPostService;
const postService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield new postModel_1.default(req.body).save();
        res.status(201).json({ con: true, msg: 'New Post Added', data });
    }
    catch (err) {
        next(err);
    }
});
exports.postService = postService;
const singlePostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const singlePost = yield postModel_1.default.findById(req.params.id).populate('user');
        if (singlePost) {
            res.status(200).json({ con: true, msg: 'Get Single Post', data: singlePost });
        }
        else {
            next(new Error('No post with this id!'));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.singlePostService = singlePostService;
const updatePostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel_1.default.findById(req.params.id);
        if (post) {
            yield postModel_1.default.findByIdAndUpdate(post._id, req.body);
            const updatePost = yield postModel_1.default.findById(req.params.id);
            res.status(200).json({ con: true, msg: 'Update Post Successfully', data: updatePost });
        }
        else {
            next(new Error('No post with this id!'));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.updatePostService = updatePostService;
const delPostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield postModel_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ con: true, msg: 'Delete Post Successfully' });
    }
    catch (err) {
        next(err);
    }
});
exports.delPostService = delPostService;
