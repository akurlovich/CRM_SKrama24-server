import { Router } from 'express';
import dealTitleController from '../controllers/dealTitle-controller';

const router = Router();
router.post('/', dealTitleController.addDealTitle);
router.get('/:id', dealTitleController.getDealTitleByID);
router.get('/', dealTitleController.getAllDealTitles);

export default router;