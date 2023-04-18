"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = (0, express_1.default)();
router.route('/')
    .get(userController_1.allUser)
    .post(userController_1.postUser);
router.route('/:id')
    .get(userController_1.singleUser)
    .patch(userController_1.updateUser)
    .delete(userController_1.delUser);
exports.default = router;
