"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var search_controller_1 = __importDefault(require("../controllers/search-controller"));
var router = (0, express_1.Router)();
router.get('/', search_controller_1.default.getSearchResult);
router.get('/user', search_controller_1.default.getSearchResultUserCompanies);
router.get('/district', search_controller_1.default.getSearchResultDistrictCompanies);
exports.default = router;
