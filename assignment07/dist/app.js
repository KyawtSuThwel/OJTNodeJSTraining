"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const swaggerUI = __importStar(require("swagger-ui-express"));
const YAML = __importStar(require("yamljs"));
const error_1 = __importDefault(require("./middlewares/error"));
const post_route_1 = __importDefault(require("./routes/post_route"));
const auth_route_1 = __importDefault(require("./routes/auth_route"));
const PassportJWTConfig = __importStar(require("./config/passport"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
const swaggerDocument = YAML.load('./swagger/api.yaml');
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(passport_1.default.initialize());
PassportJWTConfig;
mongoose_1.default
    .connect(process.env.DATABASE || "")
    .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    app.use('/api/posts', passport_1.default.authenticate('jwt', { session: false }), post_route_1.default);
    app.use("/api", auth_route_1.default);
    app.use(error_1.default);
});
//# sourceMappingURL=app.js.map