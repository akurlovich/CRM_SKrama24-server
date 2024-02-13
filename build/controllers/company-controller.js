"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var company_service_1 = __importDefault(require("../services/company-service"));
var contact_service_1 = __importDefault(require("../services/contact-service"));
var phone_service_1 = __importDefault(require("../services/phone-service"));
var email_service_1 = __importDefault(require("../services/email-service"));
var deal_service_1 = __importDefault(require("../services/deal-service"));
var order_service_1 = __importDefault(require("../services/order-service"));
var comment_service_1 = __importDefault(require("../services/comment-service"));
var CompanyController = /** @class */ (function () {
    function CompanyController() {
    }
    CompanyController.prototype.addCompany = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, company, contact, redyContact, newContact, newCompany, phone, newPhone, email, newEmail, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        _a = req.body, company = _a.company, contact = _a.contact;
                        redyContact = {
                            address: {
                                main: contact.address.main,
                                district: contact.address.district,
                            },
                        };
                        return [4 /*yield*/, contact_service_1.default.addContact(redyContact)];
                    case 1:
                        newContact = _b.sent();
                        // console.log('newContact', newContact);
                        company.contactID = newContact._id;
                        return [4 /*yield*/, company_service_1.default.addCompany(company)];
                    case 2:
                        newCompany = _b.sent();
                        return [4 /*yield*/, contact_service_1.default.updateContactCompanyID(newContact._id, newCompany._id)];
                    case 3:
                        _b.sent();
                        if (!contact.phonesID.number) return [3 /*break*/, 6];
                        phone = {
                            companyID: newCompany._id,
                            number: contact.phonesID.number,
                            description: contact.phonesID.description,
                        };
                        return [4 /*yield*/, phone_service_1.default.addPhone(phone)];
                    case 4:
                        newPhone = _b.sent();
                        return [4 /*yield*/, contact_service_1.default.updateContactAddPhone(newContact._id, newPhone)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        if (!contact.emailsID.email) return [3 /*break*/, 9];
                        email = {
                            companyID: newCompany._id,
                            email: contact.emailsID.email,
                            description: contact.emailsID.description,
                        };
                        return [4 /*yield*/, email_service_1.default.addEmail(email)];
                    case 7:
                        newEmail = _b.sent();
                        return [4 /*yield*/, contact_service_1.default.updateContactAddEmail(newContact._id, newEmail)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [2 /*return*/, res.json(newCompany)];
                    case 10:
                        error_1 = _b.sent();
                        next(error_1);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CompanyController.prototype.getCompanyByID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var company, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, company_service_1.default.getCompanyByID(req.params.id)];
                    case 1:
                        company = _a.sent();
                        return [2 /*return*/, res.json(company)];
                    case 2:
                        error_2 = _a.sent();
                        next(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CompanyController.prototype.getAllCompanies = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var companies, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, company_service_1.default.getAllCompanies()];
                    case 1:
                        companies = _a.sent();
                        // console.log('companies', companies)
                        return [2 /*return*/, res.json(companies)];
                    case 2:
                        error_3 = _a.sent();
                        next(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CompanyController.prototype.getAllCompaniesPopulateQuery = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var companies, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, company_service_1.default.getAllCompaniesPopulateQuery(req.body)];
                    case 1:
                        companies = _a.sent();
                        // console.log('companies', companies)
                        return [2 /*return*/, res.json(companies)];
                    case 2:
                        error_4 = _a.sent();
                        next(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CompanyController.prototype.getCompanyByIDQuery = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var company, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, company_service_1.default.getCompanyByIDQuery(req.body)];
                    case 1:
                        company = _a.sent();
                        // console.log('company', company)
                        return [2 /*return*/, res.json(company)];
                    case 2:
                        error_5 = _a.sent();
                        next(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CompanyController.prototype.getAllCompaniesPopulate = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var companies, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, company_service_1.default.getAllCompaniesPopulate()];
                    case 1:
                        companies = _a.sent();
                        // console.log('companies', companies)
                        return [2 /*return*/, res.json(companies)];
                    case 2:
                        error_6 = _a.sent();
                        next(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CompanyController.prototype.updateCompanyDescription = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var company, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, company_service_1.default.updateCompanyDescription(req.params.id, req.body)];
                    case 1:
                        company = _a.sent();
                        // console.log('companies', companies)
                        return [2 /*return*/, res.json(company)];
                    case 2:
                        error_7 = _a.sent();
                        next(error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CompanyController.prototype.deleteCompanyByID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var company, _i, _a, item, companyDelete, error_8;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        return [4 /*yield*/, company_service_1.default.getCompanyByID(req.params.id)];
                    case 1:
                        company = _b.sent();
                        return [4 /*yield*/, contact_service_1.default.deleteContactByID(company.contactID.toString())];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, deal_service_1.default.deleteAllCompanyDeals(company.dealsID)];
                    case 3:
                        _b.sent();
                        _i = 0, _a = company.ordersID;
                        _b.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        item = _a[_i];
                        return [4 /*yield*/, order_service_1.default.deleteOrderByID(item.toString())];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7: return [4 /*yield*/, comment_service_1.default.deleteAllCompanyComments(company.commentsID)
                        // console.log(company)
                    ];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, company_service_1.default.deleteCompanyByID(req.params.id)];
                    case 9:
                        companyDelete = _b.sent();
                        return [2 /*return*/, res.json(companyDelete)];
                    case 10:
                        error_8 = _b.sent();
                        next(error_8);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return CompanyController;
}());
;
exports.default = new CompanyController;
