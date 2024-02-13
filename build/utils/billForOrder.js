"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billForOrder = void 0;
var num2str_1 = require("./num2str");
var wordOderCreate_1 = require("./wordOderCreate");
var billForOrder = function (orderItems, orderID, companyTitle, orderNumber, filename) {
    var checkArray = [];
    for (var i = 0; i < orderItems.length; i++) {
        var newCheck = {
            //TODO заменить на orderID, и подумать когда несколько счетов в одной order
            orderID: orderID + orderNumber,
            item: i + 1,
            title: orderItems[i].productTitle,
            dimension: orderItems[i].productDimension,
            count: orderItems[i].count.toString().replace('.', ','),
            price: orderItems[i].price.toFixed(2).replace('.', ','),
            sum: orderItems[i].sum.toFixed(2).replace('.', ','),
            vatRate: 20,
            vatSum: orderItems[i].vatSum.toFixed(2).replace('.', ','),
            totalSum: orderItems[i].totalSum.toFixed(2).replace('.', ','),
        };
        checkArray.push(newCheck);
    }
    ;
    var sum = orderItems.reduce(function (s, cur) { return s + cur.sum; }, 0);
    var vatSum = orderItems.reduce(function (s, cur) { return s + cur.vatSum; }, 0);
    var totalSum = orderItems.reduce(function (s, cur) { return s + cur.totalSum; }, 0);
    var today = new Date();
    var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    var date = "".concat(today.getDate(), " ").concat(months[today.getMonth()], " ").concat(today.getFullYear());
    var vatSumWords = (0, num2str_1.num2str)(vatSum.toFixed(2));
    var totalSumWords = (0, num2str_1.num2str)(totalSum.toFixed(2));
    var baseData = {
        companyTitle: companyTitle,
        // orderNumber: newOrder.orderNumber,
        orderNumber: orderNumber,
        orderDate: date,
        sum: sum.toFixed(2).replace('.', ','),
        vatSum: vatSum.toFixed(2).replace('.', ','),
        totalSum: totalSum.toFixed(2).replace('.', ','),
        vatSumWords: vatSumWords.replace('.', ','),
        totalSumWords: totalSumWords.replace('.', ','),
    };
    (0, wordOderCreate_1.wordOderCreate)(checkArray, baseData, filename);
};
exports.billForOrder = billForOrder;
