"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var deal_controller_1 = __importDefault(require("../controllers/deal-controller"));
var router = (0, express_1.Router)();
router.post('/', deal_controller_1.default.addDeal);
router.get('/:id', deal_controller_1.default.getDealByID);
router.get('/', deal_controller_1.default.getAllDeals);
// router.post('/filter', dealController.getDealsWithQuery);
router.post('/userquery', deal_controller_1.default.getAllDealsByUserQuery);
router.put('/:id', deal_controller_1.default.updateDealByID);
router.delete('/:id', deal_controller_1.default.deleteDealFromCompanyByDealID);
exports.default = router;
