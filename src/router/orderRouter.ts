import { Router } from 'express';
import orderController from '../controllers/order-controller';

const router = Router();
router.post('/order', orderController.addOrder);
router.get('/order/:id', orderController.getOrderByID);
router.get('/orders', orderController.getAllOrders);

export default router;