"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var carrier_controller_1 = __importDefault(require("../controllers/carrier-controller"));
var router = (0, express_1.Router)();
router.post('/', carrier_controller_1.default.addCarrier);
router.get('/:id/card', carrier_controller_1.default.getCarrierByID);
router.get('/', carrier_controller_1.default.getAllCarriers);
router.post('/filter', carrier_controller_1.default.getAllCarriersPopulateQuery);
router.post('/item', carrier_controller_1.default.getCarrierByIDQuery);
router.put('/:id/title', carrier_controller_1.default.updateCarrierTitle);
router.put('/:id/description', carrier_controller_1.default.updateCarrierDescription);
router.delete('/:id', carrier_controller_1.default.deleteCarrierByID);
exports.default = router;
