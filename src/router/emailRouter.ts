import { Router } from 'express';
import emailController from '../controllers/email-controller';

const router = Router();
router.post('/email', emailController.addEmail);
router.get('/email/:id', emailController.getEmailByID);
router.get('/emails', emailController.getAllEmails);

export default router;