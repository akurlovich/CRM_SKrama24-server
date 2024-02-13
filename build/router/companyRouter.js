"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var company_controller_1 = __importDefault(require("../controllers/company-controller"));
var router = (0, express_1.Router)();
router.post('/', company_controller_1.default.addCompany);
router.get('/:id/card', company_controller_1.default.getCompanyByID);
// router.get('/', companyController.getAllCompanies);
// router.get('/filter', companyController.getAllCompaniesPopulate);
router.get('/', company_controller_1.default.getAllCompanies);
router.post('/filter', company_controller_1.default.getAllCompaniesPopulateQuery);
router.post('/item', company_controller_1.default.getCompanyByIDQuery);
router.put('/:id/description', company_controller_1.default.updateCompanyDescription);
router.delete('/:id', company_controller_1.default.deleteCompanyByID);
exports.default = router;
