"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var order_controller_1 = __importDefault(require("../controllers/order-controller"));
var router = (0, express_1.Router)();
router.post('/', order_controller_1.default.addOrder);
router.get('/:id', order_controller_1.default.getOrderByID);
router.get('/', order_controller_1.default.getAllOrders);
router.put('/:id/items', order_controller_1.default.updateOrderItemsByOrderID);
router.delete('/:id', order_controller_1.default.deleteOrderByID);
exports.default = router;
