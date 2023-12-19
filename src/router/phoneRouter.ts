import { Router } from 'express';
import phoneController from '../controllers/phone-controller';

const router = Router();
router.post('/phone', phoneController.addPhone);
router.get('/phone/:id', phoneController.getPhoneByID);
router.get('/phones', phoneController.getAllPhones);

export default router;