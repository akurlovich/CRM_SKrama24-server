import { Router } from 'express';
import orderController from '../controllers/order-controller';

const router = Router();
router.post('/', orderController.addOrder);
router.get('/:id', orderController.getOrderByID);
router.post('/query', orderController.getAllOrders);
router.put('/:id/items', orderController.updateOrderItemsByOrderID);
router.put('/:id/status', orderController.updateOrderStatus);
router.delete('/:id', orderController.deleteOrderByID);

export default router;