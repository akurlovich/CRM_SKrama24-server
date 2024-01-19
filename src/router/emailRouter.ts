import { Router } from 'express';
import emailController from '../controllers/email-controller';

const router = Router();
router.post('/', emailController.addEmail);
router.get('/:id', emailController.getEmailByID);
router.get('/', emailController.getAllEmails);
router.put('/:id', emailController.updateEmailByID);
router.delete('/:id', emailController.deleteEmailByID);

export default router;