import { Router } from 'express';
import contactController from '../controllers/contact-controller';

const router = Router();
router.post('/contact', contactController.addContact);
router.get('/contact/:id', contactController.getContactByID);
router.get('/contacts', contactController.getAllContacts);

export default router;