"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Connection_1 = __importDefault(require("./db/Connection"));
const user_route_1 = require("./route/user.route");
const app = (0, express_1.default)();
(0, Connection_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/users', user_route_1.router);
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
