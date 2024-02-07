"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = __importDefault(require("../service/user.service"));
class UserController {
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const { id, pin, firstName, lastName, email, age } = req.body;
                const data = yield user_service_1.default.findAll();
                res.json({ success: true, data });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error === null || error === void 0 ? void 0 : error.message });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield user_service_1.default.findByPk({ id });
                res.json({ success: true });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error === null || error === void 0 ? void 0 : error.message });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { pin, firstName, lastName, email, age } = req.body;
                const data = yield user_service_1.default.create({ pin, firstname: firstName, lastname: lastName, email, age });
                res.json({ success: true, data });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error === null || error === void 0 ? void 0 : error.message });
            }
        });
    }
    updateById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { pin, firstName, lastName, email, age } = req.body;
                const data = yield user_service_1.default.updateById(Number(id), { pin, firstname: firstName, lastname: lastName, email, age });
                res.json({ success: true, data });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error === null || error === void 0 ? void 0 : error.message });
            }
        });
    }
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield user_service_1.default.deleteById(Number(id));
                res.json({ success: true, data });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error === null || error === void 0 ? void 0 : error.message });
            }
        });
    }
}
;
exports.userController = new UserController();
