import { Router } from 'express';
import productController from '../controllers/product-controller';

const router = Router();
router.post('/', productController.addProduct);
router.get('/:id', productController.getProductByID);
router.get('/', productController.getAllProducts);
router.delete('/:id', productController.deleteProductByID);

export default router;