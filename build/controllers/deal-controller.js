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
var deal_service_1 = __importDefault(require("../services/deal-service"));
var DealController = /** @class */ (function () {
    function DealController() {
    }
    DealController.prototype.addDeal = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var newDeal, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, deal_service_1.default.addDeal(req.body)];
                    case 1:
                        newDeal = _a.sent();
                        return [4 /*yield*/, company_service_1.default.updateCompanyAddDeal(newDeal)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json(newDeal)];
                    case 3:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    DealController.prototype.getDealByID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deal, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, deal_service_1.default.getDealByID(req.params.id)];
                    case 1:
                        deal = _a.sent();
                        return [2 /*return*/, res.json(deal)];
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
    DealController.prototype.getAllDeals = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deals, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, deal_service_1.default.getAllDeals()];
                    case 1:
                        deals = _a.sent();
                        return [2 /*return*/, res.json(deals)];
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
    DealController.prototype.getAllDealsByUserQuery = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deals, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, deal_service_1.default.getAllDealsByUserQuery(req.body)];
                    case 1:
                        deals = _a.sent();
                        return [2 /*return*/, res.json(deals)];
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
    DealController.prototype.getDealsWithQuery = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deals, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, deal_service_1.default.getDealsWithQuery(req.body)];
                    case 1:
                        deals = _a.sent();
                        return [2 /*return*/, res.json(deals)];
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
    DealController.prototype.updateDealByID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deal, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, deal_service_1.default.updateDealByID(req.params.id, req.body)];
                    case 1:
                        deal = _a.sent();
                        return [2 /*return*/, res.json(deal)];
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
    DealController.prototype.deleteDealFromCompanyByDealID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deal, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, company_service_1.default.deleteDealFromCompanyByDealID(req.params.id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, deal_service_1.default.deleteDealByID(req.params.id)];
                    case 2:
                        deal = _a.sent();
                        return [2 /*return*/, res.json(deal)];
                    case 3:
                        error_7 = _a.sent();
                        next(error_7);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return DealController;
}());
;
exports.default = new DealController;
