import { Router } from 'express';
import commentController from '../controllers/comment-controller';

const router = Router();
router.post('/', commentController.addComment);
router.get('/:id', commentController.getCommentByID);
router.get('/', commentController.getAllComments);

export default router;