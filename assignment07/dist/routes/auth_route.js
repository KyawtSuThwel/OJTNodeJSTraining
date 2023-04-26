"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const AuthController_1 = require("../controllers/AuthController");
const router = express_1.default.Router();
router
    .route("/login")
    .post([
    (0, express_validator_1.body)("email").notEmpty().withMessage("Email must not be empty"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password must not be empty")
], AuthController_1.login);
router.route("/logout").post([], AuthController_1.logout);
exports.default = router;
//# sourceMappingURL=auth_route.js.map