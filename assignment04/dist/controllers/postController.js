"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delPost = exports.updatePost = exports.singlePost = exports.post = exports.allPost = void 0;
const postService_1 = require("../services/postService");
const allPost = (req, res, next) => {
    (0, postService_1.allPostService)(req, res, next);
};
exports.allPost = allPost;
const post = (req, res, next) => {
    (0, postService_1.postService)(req, res, next);
};
exports.post = post;
const singlePost = (req, res, next) => {
    (0, postService_1.singlePostService)(req, res, next);
};
exports.singlePost = singlePost;
const updatePost = (req, res, next) => {
    (0, postService_1.updatePostService)(req, res, next);
};
exports.updatePost = updatePost;
const delPost = (req, res, next) => {
    (0, postService_1.delPostService)(req, res, next);
};
exports.delPost = delPost;
