"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var phone_controller_1 = __importDefault(require("../controllers/phone-controller"));
var router = (0, express_1.Router)();
router.post('/', phone_controller_1.default.addPhone);
router.get('/:id', phone_controller_1.default.getPhoneByID);
router.get('/', phone_controller_1.default.getAllPhones);
router.put('/:id', phone_controller_1.default.updatePhoneByID);
router.delete('/:id', phone_controller_1.default.deletePhoneByID);
exports.default = router;
