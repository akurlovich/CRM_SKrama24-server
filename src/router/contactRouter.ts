import { Router } from 'express';
import contactController from '../controllers/contact-controller';

const router = Router();
router.post('/', contactController.addContact);
router.get('/:id', contactController.getContactByID);
router.get('/', contactController.getAllContacts);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContactByID);

export default router;