"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var comment_controller_1 = __importDefault(require("../controllers/comment-controller"));
var router = (0, express_1.Router)();
router.post('/', comment_controller_1.default.addComment);
router.get('/:id', comment_controller_1.default.getCommentByID);
router.get('/', comment_controller_1.default.getAllComments);
exports.default = router;
