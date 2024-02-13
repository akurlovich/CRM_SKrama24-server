"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dealTitle_controller_1 = __importDefault(require("../controllers/dealTitle-controller"));
var router = (0, express_1.Router)();
router.post('/', dealTitle_controller_1.default.addDealTitle);
router.get('/:id', dealTitle_controller_1.default.getDealTitleByID);
router.get('/', dealTitle_controller_1.default.getAllDealTitles);
exports.default = router;
