"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'user' },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = (0, mongoose_1.model)('post', postSchema);
