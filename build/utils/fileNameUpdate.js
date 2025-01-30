"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileNameUpdate = void 0;
var fileNameUpdate = function (type, orderNumber, fileLength) {
    switch (type) {
        case 'invoice':
            return 'Счёт_СКРАМ-Материалы_' + orderNumber + '_v' + (fileLength + 1) + '.docx';
        case 'retail':
            return 'Счёт_Розница_СКРАМ-Материалы_' + orderNumber + '_v' + (fileLength + 1) + '.docx';
        case 'check':
            return 'Товарный_чек_СКРАМ-Материалы_' + orderNumber + '_v' + (fileLength + 1) + '.docx';
        default:
            break;
    }
};
exports.fileNameUpdate = fileNameUpdate;
