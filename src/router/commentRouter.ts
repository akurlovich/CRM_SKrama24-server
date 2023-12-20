import { Router } from 'express';
import commentController from '../controllers/comment-controller';

const router = Router();
router.post('/comment', commentController.addComment);
router.get('/comment/:id', commentController.getCommentByID);
router.get('/comments', commentController.getAllComments);

export default router;