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
exports.findByNameService = exports.deletePostService = exports.updatePostService = exports.findPostService = exports.createPostService = exports.getPostService = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const express_validator_1 = require("express-validator");
const logger_1 = require("../logger/logger");
/**
 * get post service.
 * @param _req
 * @param res
 * @param next
 */
const getPostService = (_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let condition = { deleted_at: null };
        const posts = yield Post_1.default.find(condition);
        res.json({ data: posts, status: 1 });
    }
    catch (err) {
        logger_1.logger.error('GET Post API Error');
        logger_1.logger.error(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        res.status(403).json({ message: 'GET Post API Error', status: 1 });
    }
});
exports.getPostService = getPostService;
/**
 * create post service
 * @param req
 * @param res
 * @param next
 */
const createPostService = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req.body);
        if (!errors.isEmpty()) {
            const error = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        const postInsert = {
            title: req.body.title,
            description: req.body.description
        };
        const post = new Post_1.default(postInsert);
        const result = yield post.save();
        res
            .status(201)
            .json({ message: "Created Successfully!", data: result, status: 1 });
    }
    catch (err) {
        logger_1.logger.error('Create Post API Error');
        logger_1.logger.error(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        res.status(403).json({ message: 'Create Post API Error', status: 1 });
    }
});
exports.createPostService = createPostService;
/**
 * get post data with postId service.
 * @param req
 * @param res
 * @param _next
 */
const findPostService = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post_1.default.findById(req.params.id);
        if (!post) {
            const error = Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        res.json({ data: post, status: 1 });
    }
    catch (err) {
        logger_1.logger.error('GET Post with id API Error');
        logger_1.logger.error(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        res
            .status(404)
            .json({ message: "GET Post with id API Error", status: 0 });
    }
});
exports.findPostService = findPostService;
/**
 * update post with id.
 * @param req
 * @param res
 * @param _next
 */
const updatePostService = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req.body);
        if (!errors.isEmpty()) {
            const error = new Error("Validation failed!");
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        const post = yield Post_1.default.findById(req.params.id);
        if (!post) {
            const error = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        post.title = req.body.title;
        post.description = req.body.description;
        const result = yield post.save();
        res.json({ message: "Updated Successfully!", data: result, status: 1 });
    }
    catch (err) {
        logger_1.logger.error('Update Post API Error');
        logger_1.logger.error(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        res.status(403).json({ data: 'Update Post API Error', status: 1 });
    }
});
exports.updatePostService = updatePostService;
/**
 * delete post with id.
 * @param req
 * @param res
 * @param _next
 */
const deletePostService = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post_1.default.findById(req.params.id);
        if (!post) {
            const error = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        post.deleted_at = new Date();
        yield post.save();
        res.json({ message: "Deleted Successfully!", status: 1 });
    }
    catch (err) {
        logger_1.logger.error('Delete Post API Error');
        logger_1.logger.error(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        res.status(403).json({ data: 'Delete Post API Error', status: 1 });
    }
});
exports.deletePostService = deletePostService;
/**
 * find title with keyword service.
 * @param req
 * @param res
 * @param _next
 */
const findByNameService = (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let condition = { title: { '$regex': req.body.title, '$options': 'i' }, deleted_at: null };
        const posts = yield Post_1.default.find(condition);
        res.json({ data: posts, status: 1 });
    }
    catch (err) {
        logger_1.logger.error('Search Post with title keyword API Error');
        logger_1.logger.error(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        res.status(403).json({ data: 'Search Post with title keyword API Error', status: 1 });
    }
});
exports.findByNameService = findByNameService;
//# sourceMappingURL=PostService.js.map