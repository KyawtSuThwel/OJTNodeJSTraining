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
exports.delUserService = exports.updateUserService = exports.singleUserService = exports.postUserService = exports.allUserService = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const allUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find();
        res.status(200).json({ con: true, msg: 'All Users', data: users });
    }
    catch (err) {
        next(err);
    }
});
exports.allUserService = allUserService;
const postUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield new userModel_1.default(req.body).save();
        res.status(201).json({ con: true, msg: 'New User Added', data });
    }
    catch (err) {
        next(err);
    }
});
exports.postUserService = postUserService;
const singleUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const singleUser = yield userModel_1.default.findById(req.params.id);
        if (singleUser) {
            res.status(200).json({ con: true, msg: 'Get Single User', data: singleUser });
        }
        else {
            next(new Error('No user with this id!'));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.singleUserService = singleUserService;
const updateUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.findById(req.params.id);
        if (user) {
            yield userModel_1.default.findByIdAndUpdate(user._id, req.body);
            const updateUser = yield userModel_1.default.findById(req.params.id);
            res.status(200).json({ con: true, msg: 'Update User Successfully', data: updateUser });
        }
        else {
            next(new Error('No user with this id!'));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.updateUserService = updateUserService;
const delUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ con: true, msg: 'Delete User Successfully' });
    }
    catch (err) {
        next(err);
    }
});
exports.delUserService = delUserService;
