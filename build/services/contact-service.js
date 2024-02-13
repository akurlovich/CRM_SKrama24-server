"use strict";
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
var contact_model_1 = __importDefault(require("../models/contact-model"));
var ContactService = /** @class */ (function () {
    function ContactService() {
    }
    ContactService.prototype.addContact = function (contact) {
        return __awaiter(this, void 0, void 0, function () {
            var newContact;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.create(contact)];
                    case 1:
                        newContact = _a.sent();
                        return [2 /*return*/, newContact];
                }
            });
        });
    };
    ;
    ContactService.prototype.getContactByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.findById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    ContactService.prototype.getContactByPhoneID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var contact;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.findOne({ phonesID: { _id: id } })];
                    case 1:
                        contact = _a.sent();
                        // console.log('1', contact.phonesID.filter(item => {
                        //   console.log('item', item.toString())
                        //   console.log('id', id)
                        //   // item !== id
                        // } ));
                        // contact.phonesID.filter(item => item.toString() != id);
                        // const index = contact.phonesID.findIndex(item => item.toString() == id)
                        // contact.phonesID.splice(index, 1)
                        return [2 /*return*/, contact];
                }
            });
        });
    };
    ;
    //TODO передать id телефона
    ContactService.prototype.deletePhoneFromContactByPhoneID = function (phoneID) {
        return __awaiter(this, void 0, void 0, function () {
            var contact, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.findOne({ phonesID: { _id: phoneID } })];
                    case 1:
                        contact = _a.sent();
                        index = contact.phonesID.findIndex(function (item) { return item.toString() == phoneID; });
                        contact.phonesID.splice(index, 1);
                        contact.save();
                        return [2 /*return*/, contact];
                }
            });
        });
    };
    ;
    //TODO передать id email
    ContactService.prototype.deleteEmailFromContactByEmailID = function (emailID) {
        return __awaiter(this, void 0, void 0, function () {
            var contact, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.findOne({ emailsID: { _id: emailID } })];
                    case 1:
                        contact = _a.sent();
                        index = contact.emailsID.findIndex(function (item) { return item.toString() == emailID; });
                        contact.emailsID.splice(index, 1);
                        contact.save();
                        return [2 /*return*/, contact];
                }
            });
        });
    };
    ;
    ContactService.prototype.getAllContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    // async updateContact(id: string, key: string, data: string) {
    ContactService.prototype.updateContactAddress = function (id, _a) {
        var main = _a.main, district = _a.district;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.findByIdAndUpdate({ _id: id }, { address: { main: main, district: district } }, { new: true })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ;
    ContactService.prototype.updateContactCompany = function (id, _a) {
        var companyID = _a.companyID, title = _a.title;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.findByIdAndUpdate({ _id: id }, { company: { companyID: companyID, title: title } }, { new: true })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ;
    ContactService.prototype.updateContactCompanyID = function (id, companyID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.findByIdAndUpdate({ _id: id }, { companyID: companyID }, { new: true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    ContactService.prototype.updateContactAddPhone = function (id, phone) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.updateOne({ _id: id }, { $push: { phonesID: phone } })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    ContactService.prototype.updateContactAddEmail = function (id, email) {
        return __awaiter(this, void 0, void 0, function () {
            var contact;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.updateOne({ _id: id }, { $push: { emailsID: email } })];
                    case 1:
                        contact = _a.sent();
                        // console.log('first', contact)
                        // contact.emailsID.push(email._id);
                        // await contact.save;
                        return [2 /*return*/, contact];
                }
            });
        });
    };
    ;
    ContactService.prototype.deleteContactByID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contact_model_1.default.findByIdAndDelete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    return ContactService;
}());
;
exports.default = new ContactService();
