import config from './common/config';
import app from './app';

import { wordOderCreate } from './utils/wordOderCreate';

app.listen(config.PORT, () =>
  console.log(`App is running on ${config.API_URL}${config.PORT}`)
);

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