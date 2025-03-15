"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const env_config_utils_1 = require("./utils/env.config.utils");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (_req, res) => {
    return res.send('Service is running');
});
app.use(contact_routes_1.default);
const port = env_config_utils_1.envConfig.port || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=main.js.map