"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PhoneSchema = new mongoose_1.Schema({
    companyID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    number: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Phone', PhoneSchema);
