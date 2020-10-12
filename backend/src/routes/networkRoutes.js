import { Router } from 'express';
import networkController from '../controllers/NetworkController';

const router = new Router();

router.get('/', networkController.index);
router.get('/qty', networkController.qty);
router.post('/types', networkController.types);
router.post('/store', networkController.store);
router.get('/:id', networkController.show);

export default router;
