"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Write Config File eg.passport
 */
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("../models/User"));
const JWTStrategy = passport_jwt_1.default.Strategy;
const ExtractJWT = passport_jwt_1.default.ExtractJwt;
dotenv_1.default.config();
exports.default = passport_1.default.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.jwtSecretOrKey
}, function (jwtPayload, cb) {
    return User_1.default.findOne({ id: jwtPayload.id }, function (err, user) {
        if (err) {
            return cb(err, false);
        }
        if (user) {
            return cb(null, user);
        }
        else {
            return cb(null, false);
        }
    });
}));
//# sourceMappingURL=passport.js.map