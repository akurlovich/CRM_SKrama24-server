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
var order_service_1 = __importDefault(require("../services/order-service"));
var orderItem_service_1 = __importDefault(require("../services/orderItem-service"));
var billForOrder_1 = require("../utils/billForOrder");
var OrderController = /** @class */ (function () {
    function OrderController() {
    }
    OrderController.prototype.addOrder = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, order, orderItems, companyTitle, newOrder, newOrderItemsArr, _i, orderItems_1, item, data, newOrderItems, orderWithOrderItems, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        _a = req.body, order = _a.order, orderItems = _a.orderItems;
                        return [4 /*yield*/, company_service_1.default.getCompanyByID(order.companyID)];
                    case 1:
                        companyTitle = _b.sent();
                        return [4 /*yield*/, order_service_1.default.addOrder(order)];
                    case 2:
                        newOrder = _b.sent();
                        newOrderItemsArr = [];
                        for (_i = 0, orderItems_1 = orderItems; _i < orderItems_1.length; _i++) {
                            item = orderItems_1[_i];
                            data = {
                                orderID: newOrder.order._id.toString(),
                                //@ts-ignore
                                productID: item.productID,
                                price: item.price,
                                count: item.count,
                                sum: item.totalSum,
                            };
                            newOrderItemsArr.push(data);
                        }
                        return [4 /*yield*/, orderItem_service_1.default.addOrderItem(newOrderItemsArr)];
                    case 3:
                        newOrderItems = _b.sent();
                        return [4 /*yield*/, order_service_1.default.updateAddOrderItemsByOrderID(newOrder.order._id, newOrderItems)];
                    case 4:
                        orderWithOrderItems = _b.sent();
                        return [4 /*yield*/, company_service_1.default.updateCompanyAddOrder(newOrder.order)];
                    case 5:
                        _b.sent();
                        (0, billForOrder_1.billForOrder)(orderItems, newOrder.order._id, companyTitle.title, (newOrder.count + 1).toString(), newOrder.fileName);
                        return [2 /*return*/, res.json(orderWithOrderItems)];
                    case 6:
                        error_1 = _b.sent();
                        next(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ;
    OrderController.prototype.getOrderByID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var order, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, order_service_1.default.getOrderByID(req.params.id)];
                    case 1:
                        order = _a.sent();
                        return [2 /*return*/, res.json(order)];
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
    OrderController.prototype.getAllOrders = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var orders, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, order_service_1.default.getAllOrders(req)];
                    case 1:
                        orders = _a.sent();
                        return [2 /*return*/, res.json(orders)];
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
    OrderController.prototype.updateOrderItemsByOrderID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, order, orderItems, foundOrder, _i, _b, item, newOrderItemsArr, _c, orderItems_2, item, data, newOrderItems, newFileName, orderUpdate, companyTitle, error_4;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 9, , 10]);
                        _a = req.body, order = _a.order, orderItems = _a.orderItems;
                        return [4 /*yield*/, order_service_1.default.getOrderByID(req.params.id)];
                    case 1:
                        foundOrder = _d.sent();
                        _i = 0, _b = foundOrder.orderItemID;
                        _d.label = 2;
                    case 2:
                        if (!(_i < _b.length)) return [3 /*break*/, 5];
                        item = _b[_i];
                        return [4 /*yield*/, orderItem_service_1.default.deleteOrderItemByID(item.toString())];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        ;
                        newOrderItemsArr = [];
                        for (_c = 0, orderItems_2 = orderItems; _c < orderItems_2.length; _c++) {
                            item = orderItems_2[_c];
                            data = {
                                orderID: order.orderID,
                                //@ts-ignore
                                productID: item.productID,
                                price: item.price,
                                count: item.count,
                                sum: item.totalSum,
                            };
                            newOrderItemsArr.push(data);
                        }
                        return [4 /*yield*/, orderItem_service_1.default.addOrderItem(newOrderItemsArr)];
                    case 6:
                        newOrderItems = _d.sent();
                        newFileName = 'Счёт_СКРАМ-Материалы_' + foundOrder.orderNumber + '_v' + (foundOrder.fileName.length + 1) + '.docx';
                        return [4 /*yield*/, order_service_1.default.updateOrderItemsByOrderID(order, newOrderItems, newFileName)];
                    case 7:
                        orderUpdate = _d.sent();
                        return [4 /*yield*/, company_service_1.default.getCompanyByID(foundOrder.companyID.toString())];
                    case 8:
                        companyTitle = _d.sent();
                        (0, billForOrder_1.billForOrder)(orderItems, req.params.id, companyTitle.title, (foundOrder.orderNumber).toString(), newFileName);
                        return [2 /*return*/, res.json(orderUpdate)];
                    case 9:
                        error_4 = _d.sent();
                        next(error_4);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ;
    OrderController.prototype.deleteOrderByID = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var email, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, order_service_1.default.deleteOrderByID(req.params.id)];
                    case 1:
                        email = _a.sent();
                        return [2 /*return*/, res.json(email)];
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
    return OrderController;
}());
;
exports.default = new OrderController;
