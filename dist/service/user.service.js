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
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
class UserService {
    findByPk(arg0) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_model_1.TestUser.findAll();
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield user_model_1.TestUser.create(user);
                return newUser;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    updateById(id, { pin, email, firstname, lastname, age }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userToUpdate = yield user_model_1.TestUser.findByPk(id);
                if (!userToUpdate)
                    throw new Error('User not found');
                yield userToUpdate.update({ pin, email, firstname, lastname, age });
                return userToUpdate;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userToDelete = yield user_model_1.TestUser.findByPk(id);
                if (!userToDelete)
                    throw new Error('User not found');
                yield userToDelete.destroy();
                return { message: 'User deleted successfully' };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = new UserService();
