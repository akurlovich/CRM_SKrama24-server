import { Router } from 'express';
import dealController from '../controllers/deal-controller';

const router = Router();
router.post('/', dealController.addDeal);
router.get('/:id', dealController.getDealByID);
router.get('/', dealController.getAllDeals);
router.post('/filter', dealController.getDealsWithQuery);
router.put('/:id', dealController.updateDealByID);
router.delete('/:id', dealController.deleteDealFromCompanyByDealID);

export default router;