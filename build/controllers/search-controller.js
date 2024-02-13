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
var search_service_1 = __importDefault(require("../services/search-service"));
var SearchController = /** @class */ (function () {
    function SearchController() {
    }
    SearchController.prototype.getSearchResult = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var search, resultCompany, result, _i, resultCompany_1, item, sendItem, resultPhones, _a, resultPhones_1, item, company, sendItem, resultEmails, _b, resultEmails_1, item, company, sendItem, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 15, , 16]);
                        search = req.query.search;
                        return [4 /*yield*/, search_service_1.default.getSearchCompanies(search.toString())];
                    case 1:
                        resultCompany = _c.sent();
                        result = [];
                        if (!resultCompany.length) return [3 /*break*/, 2];
                        for (_i = 0, resultCompany_1 = resultCompany; _i < resultCompany_1.length; _i++) {
                            item = resultCompany_1[_i];
                            sendItem = {
                                companyID: item._id,
                                companyTitle: item.title,
                                userFirstName: item.usersID[0] ? item.usersID[0].firstname : '',
                                userLastName: item.usersID[0] ? item.usersID[0].lastname : '',
                                phoneNumber: item.contactID.phonesID[0] ? item.contactID.phonesID[0].number : '',
                                phoneDescription: item.contactID.phonesID[0] ? item.contactID.phonesID[0].description : '',
                                emailEmail: item.contactID.emailsID[0] ? item.contactID.emailsID[0].email : '',
                                emailDescription: item.contactID.emailsID[0] ? item.contactID.emailsID[0].description : '',
                            };
                            result.push(sendItem);
                        }
                        return [2 /*return*/, res.json(result)];
                    case 2: return [4 /*yield*/, search_service_1.default.getSearchCompanyPhones(search.toString())];
                    case 3:
                        resultPhones = _c.sent();
                        if (!resultPhones.length) return [3 /*break*/, 8];
                        _a = 0, resultPhones_1 = resultPhones;
                        _c.label = 4;
                    case 4:
                        if (!(_a < resultPhones_1.length)) return [3 /*break*/, 7];
                        item = resultPhones_1[_a];
                        return [4 /*yield*/, search_service_1.default.getCompanyByIDForSearch(item.companyID.toString())];
                    case 5:
                        company = _c.sent();
                        sendItem = {
                            companyID: item._id,
                            companyTitle: company.title,
                            userFirstName: company.usersID[0] ? company.usersID[0].firstname : '',
                            userLastName: company.usersID[0] ? company.usersID[0].lastname : '',
                            phoneNumber: item.number,
                            phoneDescription: item.description ? item.description : '',
                            emailEmail: '',
                            emailDescription: '',
                        };
                        result.push(sendItem);
                        _c.label = 6;
                    case 6:
                        _a++;
                        return [3 /*break*/, 4];
                    case 7: return [2 /*return*/, res.json(result)];
                    case 8: return [4 /*yield*/, search_service_1.default.getSearchCompanyEmails(search.toString())];
                    case 9:
                        resultEmails = _c.sent();
                        if (!resultEmails.length) return [3 /*break*/, 14];
                        _b = 0, resultEmails_1 = resultEmails;
                        _c.label = 10;
                    case 10:
                        if (!(_b < resultEmails_1.length)) return [3 /*break*/, 13];
                        item = resultEmails_1[_b];
                        return [4 /*yield*/, search_service_1.default.getCompanyByIDForSearch(item.companyID.toString())];
                    case 11:
                        company = _c.sent();
                        sendItem = {
                            companyID: item._id,
                            companyTitle: company.title,
                            userFirstName: company.usersID[0] ? company.usersID[0].firstname : '',
                            userLastName: company.usersID[0] ? company.usersID[0].lastname : '',
                            phoneNumber: '',
                            phoneDescription: '',
                            emailEmail: item.email,
                            emailDescription: item.description ? item.description : '',
                        };
                        result.push(sendItem);
                        _c.label = 12;
                    case 12:
                        _b++;
                        return [3 /*break*/, 10];
                    case 13: return [2 /*return*/, res.json(result)];
                    case 14: return [2 /*return*/, res.json(result)];
                    case 15:
                        error_1 = _c.sent();
                        next(error_1);
                        return [3 /*break*/, 16];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return SearchController;
}());
;
exports.default = new SearchController;
