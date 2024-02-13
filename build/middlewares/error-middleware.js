"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(err, req, res, next) {
    return res.status(err.status).json({ message: err.message });
}
exports.default = default_1;
