"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const router = express_1.default.Router();
exports.router = router;
router.get('/', user_controller_1.userController.findAll);
router.get('/:id', user_controller_1.userController.findById);
router.post('/', user_controller_1.userController.create);
router.put('/:id', user_controller_1.userController.updateById);
router.delete('/:id', user_controller_1.userController.deleteById);
