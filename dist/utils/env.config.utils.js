"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.envConfig = {
    port: process.env.PORT || 3000,
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS,
};
//# sourceMappingURL=env.config.utils.js.map