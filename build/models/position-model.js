"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PositionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Position', PositionSchema);
