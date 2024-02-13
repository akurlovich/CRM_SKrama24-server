"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var email_controller_1 = __importDefault(require("../controllers/email-controller"));
var router = (0, express_1.Router)();
router.post('/', email_controller_1.default.addEmail);
router.get('/:id', email_controller_1.default.getEmailByID);
router.get('/', email_controller_1.default.getAllEmails);
router.put('/:id', email_controller_1.default.updateEmailByID);
router.delete('/:id', email_controller_1.default.deleteEmailByID);
exports.default = router;
