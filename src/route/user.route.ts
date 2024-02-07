import express from 'express';
import { userController } from '../controller/user.controller';

class UserRoutes {
    router;
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/user', userController.findAll);
        this.router.get('/user/:id', userController.findById);
        this.router.post('/user', userController.create);
        this.router.patch('/user/:id', userController.updateById);
        this.router.delete('/user/:id', userController.deleteById);
    }
}

export const routes = new UserRoutes();
