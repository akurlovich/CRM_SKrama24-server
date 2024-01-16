import { Router } from 'express';
import phoneController from '../controllers/phone-controller';

const router = Router();
router.post('/', phoneController.addPhone);
router.get('/:id', phoneController.getPhoneByID);
router.get('/', phoneController.getAllPhones);

export default router;