import { Router } from 'express';
import orderController from '../controllers/order-controller';

const router = Router();
router.post('/', orderController.addOrder);
router.get('/:id', orderController.getOrderByID);
router.get('/', orderController.getAllOrders);
router.put('/:id/items', orderController.updateOrderItemsByOrderID);
router.delete('/:id', orderController.deleteOrderByID);

export default router;