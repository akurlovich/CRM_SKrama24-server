"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ContactSchema = new mongoose_1.Schema({
    companyID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company',
    },
    address: {
        main: {
            type: String,
            default: '',
        },
        district: {
            type: String,
            default: '',
        }
    },
    phonesID: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Phone',
        }],
    emailsID: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Email',
        }],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Contact', ContactSchema);
