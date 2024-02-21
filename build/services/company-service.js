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
var company_model_1 = __importDefault(require("../models/company-model"));
var CompanyService = /** @class */ (function () {
    function CompanyService() {
    }
    CompanyService.prototype.addCompany = function (company) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.create(company)];
                    case 1: 
                    // company.contactID = contact._id;
                    // console.log('company server servise', company);
                    // const newCompany = await companyModel.create(company);
                    // return "newCompany";
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    CompanyService.prototype.getCompanyByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.findById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    CompanyService.prototype.getAllCompanies = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    CompanyService.prototype.getAllCompaniesPopulateQuery = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.find(query.find).populate(query.query).limit(query.limit).sort(query.sort)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    CompanyService.prototype.getCompanyByIDQuery = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.findOne(query.find).populate(query.query).limit(query.limit).sort(query.sort)];
                    case 1: 
                    // return await companyModel.findOne({ _id: '65a627a2aa381e0a7e61c8bb' })
                    // return await companyModel.findOne(query.find).populate(query.query)
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    CompanyService.prototype.getAllCompaniesPopulate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.find().populate({ path: 'usersID', select: 'lastname firstname' }).populate({ path: 'contactID', select: 'address.district' })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    CompanyService.prototype.updateCompanyAddDeal = function (deal) {
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.updateOne({ _id: deal.companyID }, { $push: { dealsID: deal } })];
                    case 1:
                        company = _a.sent();
                        // console.log('first', contact)
                        // contact.emailsID.push(email._id);
                        // await contact.save;
                        return [2 /*return*/, company];
                }
            });
        });
    };
    ;
    CompanyService.prototype.updateCompanyAddComment = function (comment) {
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.updateOne({ _id: comment.companyID }, { $push: { commentsID: comment } })];
                    case 1:
                        company = _a.sent();
                        // console.log('first', contact)
                        // contact.emailsID.push(email._id);
                        // await contact.save;
                        return [2 /*return*/, company];
                }
            });
        });
    };
    ;
    CompanyService.prototype.updateCompanyAddOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.updateOne({ _id: order.companyID }, { $push: { ordersID: order } })];
                    case 1:
                        company = _a.sent();
                        // console.log('first', contact)
                        // contact.emailsID.push(email._id);
                        // await contact.save;
                        return [2 /*return*/, company];
                }
            });
        });
    };
    ;
    CompanyService.prototype.updateCompanyDescription = function (companyID, _a) {
        var description = _a.description;
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.findByIdAndUpdate({ _id: companyID }, { description: description })];
                    case 1:
                        company = _b.sent();
                        // console.log('first', contact)
                        // contact.emailsID.push(email._id);
                        // await contact.save;
                        return [2 /*return*/, company];
                }
            });
        });
    };
    ;
    CompanyService.prototype.updateCompanyUsers = function (companyID, usersID) {
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.findByIdAndUpdate({ _id: companyID }, { $set: { usersID: [] } }, { new: true })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, company_model_1.default.findByIdAndUpdate({ _id: companyID }, { $push: { usersID: usersID } })];
                    case 2:
                        company = _a.sent();
                        // console.log('first', contact)
                        // contact.emailsID.push(email._id);
                        // await contact.save;
                        return [2 /*return*/, company];
                }
            });
        });
    };
    ;
    //TODO передать id сделки
    CompanyService.prototype.deleteDealFromCompanyByDealID = function (dealID) {
        return __awaiter(this, void 0, void 0, function () {
            var company, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.findOne({ dealsID: { _id: dealID } })];
                    case 1:
                        company = _a.sent();
                        index = company.dealsID.findIndex(function (item) { return item.toString() == dealID; });
                        company.dealsID.splice(index, 1);
                        company.save();
                        return [2 /*return*/, company];
                }
            });
        });
    };
    ;
    CompanyService.prototype.deleteCompanyByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.default.findByIdAndDelete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    return CompanyService;
}());
;
exports.default = new CompanyService();
