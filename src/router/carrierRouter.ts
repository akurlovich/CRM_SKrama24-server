import { Router } from "express";
import carrierController from "../controllers/carrier-controller";

const router = Router();
router.post('/', carrierController.addCarrier);
router.get('/:id/card', carrierController.getCarrierByID);
router.get('/', carrierController.getAllCarriers);
router.post('/filter', carrierController.getAllCarriersPopulateQuery);
router.post('/item', carrierController.getCarrierByIDQuery);
router.put('/:id/title', carrierController.updateCarrierTitle);
router.put('/:id/description', carrierController.updateCarrierDescription);
router.delete('/:id', carrierController.deleteCarrierByID);

export default router;