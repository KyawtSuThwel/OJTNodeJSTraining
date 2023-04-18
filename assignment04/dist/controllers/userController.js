"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delUser = exports.updateUser = exports.singleUser = exports.postUser = exports.allUser = void 0;
const userService_1 = require("../services/userService");
const allUser = (req, res, next) => {
    (0, userService_1.allUserService)(req, res, next);
};
exports.allUser = allUser;
const postUser = (req, res, next) => {
    (0, userService_1.postUserService)(req, res, next);
};
exports.postUser = postUser;
const singleUser = (req, res, next) => {
    (0, userService_1.singleUserService)(req, res, next);
};
exports.singleUser = singleUser;
const updateUser = (req, res, next) => {
    (0, userService_1.updateUserService)(req, res, next);
};
exports.updateUser = updateUser;
const delUser = (req, res, next) => {
    (0, userService_1.delUserService)(req, res, next);
};
exports.delUser = delUser;
