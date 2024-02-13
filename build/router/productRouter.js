"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_1 = __importDefault(require("../controllers/product-controller"));
var router = (0, express_1.Router)();
router.post('/', product_controller_1.default.addProduct);
router.get('/:id', product_controller_1.default.getProductByID);
router.get('/', product_controller_1.default.getAllProducts);
router.delete('/:id', product_controller_1.default.deleteProductByID);
exports.default = router;
