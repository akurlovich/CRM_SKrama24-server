import { Router } from 'express';
import orderItemController from '../controllers/orderItem-controller';

const router = Router();
router.post('/orderItem', orderItemController.addOrderItem);
router.get('/orderItem/:id', orderItemController.getOrderItemByID);
router.get('/orderItems', orderItemController.getAllOrderItems);

export default router;