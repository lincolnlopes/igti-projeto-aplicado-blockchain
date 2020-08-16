import { Router } from 'express';
import meetingController from '../controllers/MeetingController';

const router = new Router();

router.get('/:id', meetingController.show);
router.get('/', meetingController.index);
router.post('/', meetingController.store);
router.put('/:id', meetingController.update);
router.delete('/:id', meetingController.delete);

export default router;
