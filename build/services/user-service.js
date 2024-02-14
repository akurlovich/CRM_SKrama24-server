"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = __importDefault(require("../models/user-model"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var token_service_1 = __importDefault(require("./token-service"));
var user_dto_1 = __importDefault(require("../dtos/user-dto"));
var api_error_1 = __importDefault(require("../exceptions/api-error"));
// import tokenModel from '../models/token-model';
// import userModel from '../models/user-model';
// import roleModel from '../models/role-model';
// import { DEFAULT_USER_ROLE } from '../constants/index';
var config_1 = __importDefault(require("../common/config"));
// import jwt from 'jsonwebtoken';
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.registration = function (email, password, firstname, lastname, position, isAdmin) {
        return __awaiter(this, void 0, void 0, function () {
            var applicant, hashPassword, user, userDto, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.findOne({ email: email })];
                    case 1:
                        applicant = _a.sent();
                        if (applicant) {
                            throw api_error_1.default.BadRequest("User with ".concat(email, " already exists!"), ['']);
                        }
                        return [4 /*yield*/, bcrypt_1.default.hash(password, config_1.default.SALT)];
                    case 2:
                        hashPassword = _a.sent();
                        return [4 /*yield*/, user_model_1.default.create({ email: email, password: hashPassword, firstname: firstname, lastname: lastname, position: position, isAdmin: isAdmin })];
                    case 3:
                        user = _a.sent();
                        userDto = new user_dto_1.default(user);
                        tokens = token_service_1.default.generateToken(__assign({}, userDto));
                        return [4 /*yield*/, token_service_1.default.saveToken(userDto.id, tokens.refreshToken)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({}, tokens), { user: userDto })];
                }
            });
        });
    };
    ;
    UserService.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isPassword, userDto, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        // console.log('email', email, 'user', user)
                        if (user === null) {
                            // console.log('user null')
                            throw api_error_1.default.BadRequest("User with ".concat(email, " not found!"), ['']);
                        }
                        return [4 /*yield*/, bcrypt_1.default.compare(password, user.password)];
                    case 2:
                        isPassword = _a.sent();
                        // console.log('pas', isPassword)
                        if (!isPassword) {
                            throw api_error_1.default.BadRequest("User password not valid!", ['']);
                        }
                        userDto = new user_dto_1.default(user);
                        tokens = token_service_1.default.generateToken(__assign({}, userDto));
                        return [4 /*yield*/, token_service_1.default.saveToken(userDto.id, tokens.refreshToken)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({}, tokens), { user: userDto })];
                }
            });
        });
    };
    ;
    UserService.prototype.logout = function (refreshToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, token_service_1.default.removeToken(refreshToken)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    UserService.prototype.refresh = function (refreshToken) {
        return __awaiter(this, void 0, void 0, function () {
            var userData, tokenFromDB, user, userDto, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log('refreshToken2', refreshToken)
                        if (!refreshToken) {
                            throw api_error_1.default.UnauthorizedError();
                        }
                        userData = token_service_1.default.validateRefreshToken(refreshToken);
                        console.log('userData', userData);
                        return [4 /*yield*/, token_service_1.default.findToken(refreshToken)];
                    case 1:
                        tokenFromDB = _a.sent();
                        if (!userData || !tokenFromDB) {
                            throw api_error_1.default.UnauthorizedError();
                        }
                        return [4 /*yield*/, user_model_1.default.findById(userData.id)];
                    case 2:
                        user = _a.sent();
                        if (!user) {
                            throw api_error_1.default.BadRequest('User not found!', ['']);
                        }
                        userDto = new user_dto_1.default(user);
                        tokens = token_service_1.default.generateToken(__assign({}, userDto));
                        return [4 /*yield*/, token_service_1.default.saveToken(userDto.id, tokens.refreshToken)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({}, tokens), { user: userDto })];
                }
            });
        });
    };
    ;
    UserService.prototype.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    UserService.prototype.getUserByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.findById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw api_error_1.default.BadRequest('User not found!', ['']);
                        }
                        return [2 /*return*/, new user_dto_1.default(user)];
                }
            });
        });
    };
    ;
    UserService.prototype.deleteUserByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.default.findByIdAndDelete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    return UserService;
}());
exports.default = new UserService();
