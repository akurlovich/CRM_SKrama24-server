import { Router } from "express";
import carrierController from "../controllers/carrier-controller";

const router = Router();
router.post('/', carrierController.addCarrier);
router.get('/', carrierController.getAllCarriers);

export default router;