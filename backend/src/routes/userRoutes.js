import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/:id', userController.show);
router.get('/', userController.index);
router.post('/', userController.store);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
