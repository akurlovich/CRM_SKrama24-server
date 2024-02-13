"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var contact_controller_1 = __importDefault(require("../controllers/contact-controller"));
var router = (0, express_1.Router)();
router.post('/', contact_controller_1.default.addContact);
router.get('/:id', contact_controller_1.default.getContactByID);
router.get('/:id/phones', contact_controller_1.default.getContactByPhoneID);
router.get('/', contact_controller_1.default.getAllContacts);
router.put('/:id', contact_controller_1.default.updateContact);
router.delete('/:id', contact_controller_1.default.deleteContactByID);
router.delete('/:id/phones', contact_controller_1.default.deletePhoneFromContactByPhoneID);
router.delete('/:id/emails', contact_controller_1.default.deleteEmailFromContactByEmailID);
exports.default = router;
