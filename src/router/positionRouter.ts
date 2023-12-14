import { Router } from 'express';
import positionController from '../controllers/position-controller';

const router = Router();
router.post('/position', positionController.addPosition);
router.get('/position/:id', positionController.getPositionByID);
router.get('/positions', positionController.getAllPositions);

export default router;