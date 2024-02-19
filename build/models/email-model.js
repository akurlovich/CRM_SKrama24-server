"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var EmailSchema = new mongoose_1.Schema({
    companyID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    email: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
    isActive: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Email', EmailSchema);
