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
var carrier_service_1 = __importDefault(require("../services/carrier-service"));
var contact_service_1 = __importDefault(require("../services/contact-service"));
var phone_service_1 = __importDefault(require("../services/phone-service"));
var email_service_1 = __importDefault(require("../services/email-service"));
var deal_service_1 = __importDefault(require("../services/deal-service"));
var comment_service_1 = __importDefault(require("../services/comment-service"));
var CarrierController = /** @class */ (function () {
    function CarrierController() {
    }
    CarrierController.prototype.addCarrier = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, carrier, contact, redyContact, newContact, newCarrier, phone, newPhone, email, newEmail, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        _a = req.body, carrier = _a.carrier, contact = _a.contact;
                        redyContact = {
                            address: {
                                main: contact.address.main,
                                district: contact.address.district,
                            },
                        };
                        return [4 /*yield*/, contact_service_1.default.addContact(redyContact)];
                    case 1:
                        newContact = _b.sent();
                        carrier.contactID = newContact._id;
                        return [4 /*yield*/, carrier_service_1.default.addCarrier(carrier)];
                    case 2:
                        newCarrier = _b.sent();
                        return [4 /*yield*/, contact_service_1.default.updateContactCompanyID(newContact._id, newCarrier._id)];
                    case 3:
                        _b.sent();
                        if (!contact.phonesID.number) return [3 /*break*/, 6];
                        phone = {
                            companyID: newCarrier._id,
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
                            companyID: newCarrier._id,
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
                    case 9: 
                    // const carriers = await carrierService.getAllCarriers();
                    // console.log('all carriers server ', carriers);
                    return [2 /*return*/, res.json(carrier)];
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
    CarrierController.prototype.getAllCarriers = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var carriers, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, carrier_service_1.default.getAllCarriers()];
                    case 1:
                        carriers = _a.sent();
                        return [2 /*return*/, res.json(carriers)];
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
    CarrierController.prototype.getCarrierByID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var carrier, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, carrier_service_1.default.getCarrierByID(req.params.id)];
                    case 1:
                        carrier = _a.sent();
                        return [2 /*return*/, res.json(carrier)];
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
    CarrierController.prototype.getCarrierByIDQuery = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var carrier, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, carrier_service_1.default.getCarrierByIDQuery(req.body)];
                    case 1:
                        carrier = _a.sent();
                        // console.log('carrier', carrier)
                        return [2 /*return*/, res.json(carrier)];
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
    CarrierController.prototype.getAllCarriersPopulateQuery = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var carriersData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, carrier_service_1.default.getAllCarriersPopulateQuery(req.body)];
                    case 1:
                        carriersData = _a.sent();
                        // console.log('companies', companies)
                        return [2 /*return*/, res.json(carriersData)];
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
    CarrierController.prototype.updateCarrierTitle = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var carrier, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, carrier_service_1.default.updateCarrierTitle(req.params.id, req.body)];
                    case 1:
                        carrier = _a.sent();
                        // console.log('companies', companies)
                        return [2 /*return*/, res.json(carrier)];
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
    CarrierController.prototype.updateCarrierDescription = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var carrier, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, carrier_service_1.default.updateCarrierDescription(req.params.id, req.body)];
                    case 1:
                        carrier = _a.sent();
                        // console.log('companies', companies)
                        return [2 /*return*/, res.json(carrier)];
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
    CarrierController.prototype.deleteCarrierByID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var carrier, carrierDelete, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, carrier_service_1.default.getCarrierByID(req.params.id)];
                    case 1:
                        carrier = _a.sent();
                        return [4 /*yield*/, contact_service_1.default.deleteContactByID(carrier.contactID.toString())];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, deal_service_1.default.deleteAllCompanyDeals(carrier.dealsID)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, comment_service_1.default.deleteAllCompanyComments(carrier.commentsID)
                            // console.log(company)
                        ];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, carrier_service_1.default.deleteCarrierByID(req.params.id)];
                    case 5:
                        carrierDelete = _a.sent();
                        return [2 /*return*/, res.json(carrierDelete)];
                    case 6:
                        error_8 = _a.sent();
                        next(error_8);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return CarrierController;
}());
;
exports.default = new CarrierController();
