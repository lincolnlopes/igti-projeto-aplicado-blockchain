import { Router } from 'express';
import issueController from '../controllers/IssueController';

const router = new Router();

router.get('/:id', issueController.show);
router.get('/', issueController.index);
router.post('/', issueController.store);
router.put('/:id', issueController.update);
router.delete('/:id', issueController.delete);

export default router;
