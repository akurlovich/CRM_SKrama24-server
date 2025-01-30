"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileNameCreate = void 0;
var fileNameCreate = function (type, count) {
    switch (type) {
        case 'invoice':
            return 'Счёт_СКРАМ-Материалы_' + (count + 1) + '.docx';
        case 'retail':
            return 'Счёт_Розница_СКРАМ-Материалы_' + (count + 1) + '.docx';
        case 'check':
            return 'Товарный_чек_СКРАМ-Материалы_' + (count + 1) + '.docx';
        default:
            break;
    }
};
exports.fileNameCreate = fileNameCreate;
