"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dimension_controller_1 = __importDefault(require("../controllers/dimension-controller"));
var router = (0, express_1.Router)();
router.post('/', dimension_controller_1.default.addDimension);
// router.get('/dimension', dimensionController.getLastDimension);
router.get('/:id', dimension_controller_1.default.getDimensionByID);
router.get('/', dimension_controller_1.default.getAllDimensions);
router.delete('/:id', dimension_controller_1.default.deleteDimensionByID);
exports.default = router;
