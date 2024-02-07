import  express from 'express'
import { userController } from '../controller/user.controller'
const router = express.Router()
router.get('/',userController.findAll)
router.get('/:id',userController.findById)
router.post('/',userController.create)
router.put('/:id',userController.updateById)
router.delete('/:id',userController.deleteById)
export {router}