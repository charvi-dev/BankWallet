import userService from '../service/user.service';
import { Request, Response } from 'express';

class UserController {
    async findAll(req: Request, res: Response): Promise<void> {
        try {
            // const { id, pin, firstName, lastName, email, age } = req.body;
            const data = await userService.findAll();
            res.json({ success: true, data });
        } catch (error: any) {
            res.status(500).json({ success: false, message: error?.message });
        }
    }

    async findById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const data = await userService.findByPk({ id });
            res.json({ success: true });
        } catch (error: any) {
            res.status(500).json({ success: false, message: error?.message });
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const { pin, firstName, lastName, email, age } = req.body;
            const data = await userService.create({ pin, firstname: firstName, lastname: lastName, email, age });
            res.json({ success: true, data });
        } catch (error: any) {
            res.status(500).json({ success: false, message: error?.message });
        }
    }

    async updateById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { pin, firstName, lastName, email, age } = req.body;
            const data = await userService.updateById(Number(id), { pin, firstname: firstName, lastname: lastName, email, age });
            res.json({ success: true, data });
        } catch (error: any) {
            res.status(500).json({ success: false, message: error?.message });
        }
    }

    async deleteById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const data = await userService.deleteById(Number(id));
            res.json({ success: true, data });
        } catch (error: any) {
            res.status(500).json({ success: false, message: error?.message });
        }
    }
};

export const userController = new UserController()