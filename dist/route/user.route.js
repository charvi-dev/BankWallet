"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
class UserRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/user', user_controller_1.userController.findAll);
        this.router.get('/user/:id', user_controller_1.userController.findById);
        this.router.post('/user', user_controller_1.userController.create);
        this.router.patch('/user/:id', user_controller_1.userController.updateById);
        this.router.delete('/user/:id', user_controller_1.userController.deleteById);
    }
}
exports.routes = new UserRoutes();
