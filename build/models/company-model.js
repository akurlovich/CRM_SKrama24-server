"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CompanySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    usersID: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
        }],
    description: {
        type: String,
        default: '',
    },
    contactID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Contact',
    },
    dealsID: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Deal',
        }],
    ordersID: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Order',
        }],
    commentsID: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Comment',
        }],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Company', CompanySchema);
