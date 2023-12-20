import { Router } from 'express';
import dealController from '../controllers/deal-controller';

const router = Router();
router.post('/deal', dealController.addDeal);
router.get('/deal/:id', dealController.getDealByID);
router.get('/deals', dealController.getAllDeals);

export default router;