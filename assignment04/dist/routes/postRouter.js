"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const router = (0, express_1.default)();
router.route('/')
    .get(postController_1.allPost)
    .post(postController_1.post);
router.route('/:id')
    .get(postController_1.singlePost)
    .patch(postController_1.updatePost)
    .delete(postController_1.delPost);
exports.default = router;
