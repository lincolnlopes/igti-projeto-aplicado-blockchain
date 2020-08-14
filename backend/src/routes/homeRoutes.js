import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);
router.get('/test', homeController.testUser);

export default router;
