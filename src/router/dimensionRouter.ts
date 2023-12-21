import { Router } from 'express';
import dimensionController from '../controllers/dimension-controller';

const router = Router();
router.post('/dimension', dimensionController.addDimension);
// router.get('/dimension', dimensionController.getLastDimension);
router.get('/dimension/:id', dimensionController.getDimensionByID);
router.get('/dimensions', dimensionController.getAllDimensions);
router.delete('/dimension/:id', dimensionController.deleteDimensionByID);

export default router;