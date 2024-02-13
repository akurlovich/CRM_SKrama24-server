"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var orderItem_controller_1 = __importDefault(require("../controllers/orderItem-controller"));
var router = (0, express_1.Router)();
router.post('/', orderItem_controller_1.default.addOrderItem);
router.get('/:id', orderItem_controller_1.default.getOrderItemByID);
router.get('/', orderItem_controller_1.default.getAllOrderItems);
router.delete('/:id', orderItem_controller_1.default.deleteOrderItemByID);
exports.default = router;
