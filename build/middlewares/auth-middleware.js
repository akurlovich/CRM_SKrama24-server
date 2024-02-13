"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_error_1 = __importDefault(require("../exceptions/api-error"));
var token_service_1 = __importDefault(require("../services/token-service"));
function default_1(req, res, next) {
    try {
        var authHeader = req.headers.authorization;
        if (!authHeader)
            return next(api_error_1.default.UnauthorizedError());
        var accesstoken = authHeader.split(' ')[1];
        if (!accesstoken)
            return next(api_error_1.default.UnauthorizedError());
        var userData = token_service_1.default.validateAccessToken(accesstoken);
        if (!userData)
            return next(api_error_1.default.UnauthorizedError());
        req.body = userData;
        next();
    }
    catch (error) {
        return next(api_error_1.default.UnauthorizedError());
    }
}
exports.default = default_1;
