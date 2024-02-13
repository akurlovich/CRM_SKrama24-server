"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var position_controller_1 = __importDefault(require("../controllers/position-controller"));
var router = (0, express_1.Router)();
router.post('/position', position_controller_1.default.addPosition);
router.get('/position/:id', position_controller_1.default.getPositionByID);
router.get('/positions', position_controller_1.default.getAllPositions);
exports.default = router;
