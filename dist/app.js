"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./route/user.route");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.setup();
    }
    setup() {
        this.app.use(express_1.default.json());
        this.app.use('/api/v1', user_route_1.routes.router);
    }
    start(port) {
        this.app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    }
}
const server = new Server();
server.start(3000);
