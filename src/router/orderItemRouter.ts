import { Router } from 'express';
import orderItemController from '../controllers/orderItem-controller';

const router = Router();
router.post('/', orderItemController.addOrderItem);
router.get('/:id', orderItemController.getOrderItemByID);
router.get('/', orderItemController.getAllOrderItems);
router.delete('/:id', orderItemController.deleteOrderItemByID);

export default router;