"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var OrderItemSchema = new mongoose_1.Schema({
    orderID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    productID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    price: {
        type: Number,
        default: 1,
    },
    count: {
        type: Number,
        default: 1,
    },
    sum: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('OrderItem', OrderItemSchema);
