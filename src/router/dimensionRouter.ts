import { Router } from 'express';
import dimensionController from '../controllers/dimension-controller';

const router = Router();
router.post('/', dimensionController.addDimension);
// router.get('/dimension', dimensionController.getLastDimension);
router.get('/:id', dimensionController.getDimensionByID);
router.get('/', dimensionController.getAllDimensions);
router.delete('/:id', dimensionController.deleteDimensionByID);

export default router;