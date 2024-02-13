"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        default: 1,
    },
    dimension: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 1,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Product', ProductSchema);
