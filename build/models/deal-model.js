"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DealSchema = new mongoose_1.Schema({
    companyID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    userID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    dealTitleID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'DealTitle',
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    dayEnd: {
        type: String,
        required: true,
    },
    monthEnd: {
        type: String,
        required: true,
    },
    yearEnd: {
        type: String,
        required: true,
    },
    minuteEnd: {
        type: String,
        required: true,
    },
    hourEnd: {
        type: String,
        required: true,
    },
    dateEnd: {
        type: String,
        required: true,
    },
    timeEnd: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Deal', DealSchema);
