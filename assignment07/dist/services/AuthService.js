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
exports.logoutService = exports.loginService = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_2 = __importDefault(require("bcrypt"));
const logger_1 = require("../logger/logger");
const User_1 = __importDefault(require("../models/User"));
/**
 * login service.
 * @param req
 * @param res
 */
const loginService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({
                success: false,
                message: 'Could not find user'
            });
        }
        if (!(0, bcrypt_1.compareSync)(req.body.password, user.password)) {
            return res.status(401).send({
                success: false,
                messages: 'Incorrect password'
            });
        }
        const payload = {
            email: yield bcrypt_2.default.hash(user.email, 12),
            id: yield bcrypt_2.default.hash(user.id, 12)
        };
        const token = jsonwebtoken_1.default.sign(payload, 'abcd', { expiresIn: '1d' });
        return res.status(200).send({
            success: true,
            message: 'Login Successfully!',
            user: user,
            token: token
        });
    }
    catch (err) {
        logger_1.logger.error('Login API Error');
        logger_1.logger.error(err);
        return res.status(403).send({
            success: false,
            message: 'Login API Error'
        });
    }
});
exports.loginService = loginService;
/**
 * logout service.
 * @param req
 * @param res
 * @returns
 */
const logoutService = (req, res) => {
    try {
        req.session = null;
        return res.json({ "message": "Logout Successfully" });
    }
    catch (err) {
        logger_1.logger.error('Logout API Error');
        logger_1.logger.error(err);
        return res.status(403).send({
            success: false,
            message: 'Logout API Error'
        });
    }
};
exports.logoutService = logoutService;
//# sourceMappingURL=AuthService.js.map