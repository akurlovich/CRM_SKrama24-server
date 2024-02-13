"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./common/config"));
var app_1 = __importDefault(require("./app"));
app_1.default.listen(config_1.default.PORT, function () {
    return console.log("App is running on ".concat(config_1.default.API_URL).concat(config_1.default.PORT));
});
// const DATA: IWordOrderData[] = [
//   {
//     item: 1,
//     title: "Поликарбонат",
//     dimension: "м2",
//     count: 3,
//     price: 3.14,
//     sum: 9.42,
//     vatRate: 20,
//     vatSum: 1.84,
//     totalSum: 11.23,
//   },
//   {
//     item: 2,
//     title: "Труба профильная 40*40*2, ст.20, длинна 12 метров, без резки, верхняя загрзука",
//     dimension: "шт",
//     count: 1,
//     price: 12313.14,
//     sum: 11258.36,
//     vatRate: 20,
//     vatSum: 8572.36,
//     totalSum: 113856.36,
//   },
// ];
// wordOderCreate(DATA);
// console.log(num2str("125.25"))
// console.log(num2str("19025.05"))
// console.log(num2str("105.00"))
// console.log(num2str("8000,00"))
// console.log(num2str("125,25"))
