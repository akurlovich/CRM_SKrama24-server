"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var OrderSchema = new mongoose_1.Schema({
    orderNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    companyID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    usersID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderItemID: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'OrderItem',
        }],
    totalSum: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        default: '',
    },
    fileName: [{
            type: String,
            default: [],
        }],
    status: {
        type: String,
        default: 'processing',
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Order', OrderSchema);
