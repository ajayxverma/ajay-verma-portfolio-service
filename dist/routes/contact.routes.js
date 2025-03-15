"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_controler_1 = require("../controller/contact.controler");
const contactRouter = express_1.default.Router();
const router = contactRouter.route('/v1/contact');
router.post(contact_controler_1.contactMeMail);
exports.default = contactRouter;
//# sourceMappingURL=contact.routes.js.map