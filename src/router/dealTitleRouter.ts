import { Router } from 'express';
import dealTitleController from '../controllers/dealTitle-controller';

const router = Router();
router.post('/dealtitle', dealTitleController.addDealTitle);
router.get('/dealtitle/:id', dealTitleController.getDealTitleByID);
router.get('/dealtitles', dealTitleController.getAllDealTitles);

export default router;