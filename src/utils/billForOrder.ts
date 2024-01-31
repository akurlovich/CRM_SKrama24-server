import { IOrderItemNew } from "../types/IOrderItem";
import { ICommonData, IWordOrderData } from "../types/IWordOrderData";
import { num2str } from "./num2str";
import { wordOderCreate } from "./wordOderCreate";

export const billForOrder = (orderItems: IOrderItemNew[], orderID: string, companyTitle: string, orderNumber: string) => {
  const checkArray: IWordOrderData[] = [] as IWordOrderData[];
    for (let i = 0; i < orderItems.length; i++) {
      const newCheck: IWordOrderData = {
//TODO заменить на orderID, и подумать когда несколько счетов в одной order
        orderID: orderID,
        item: i + 1,
        title: orderItems[i].productTitle,
        dimension: orderItems[i].productDimension,
        count: orderItems[i].count.toString().replace('.', ','),
        price: orderItems[i].price.toFixed(2).replace('.', ','),
        sum: orderItems[i].sum.toFixed(2).replace('.', ','),
        vatRate: 20,
        vatSum: orderItems[i].vatSum.toFixed(2).replace('.', ','),
        totalSum: orderItems[i].totalSum.toFixed(2).replace('.', ','),
      }
      checkArray.push(newCheck)
    };

  const sum = orderItems.reduce((s, cur) => { return s + cur.sum }, 0);
  const vatSum = orderItems.reduce((s, cur) => { return s + cur.vatSum }, 0);
  const totalSum = orderItems.reduce((s, cur) => { return s + cur.totalSum }, 0);

  const today = new Date(); 
  const months = [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' ];
  const date = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

  const vatSumWords: string = num2str(vatSum.toFixed(2));
  const totalSumWords: string = num2str(totalSum.toFixed(2));
  
  const baseData: ICommonData = {
    companyTitle: companyTitle,
    // orderNumber: newOrder.orderNumber,
    orderNumber: orderNumber,
    orderDate: date,
    sum: sum.toFixed(2).replace('.', ','),
    vatSum: vatSum.toFixed(2).replace('.', ','),
    totalSum: totalSum.toFixed(2).replace('.', ','),
    vatSumWords: vatSumWords.replace('.', ','),
    totalSumWords: totalSumWords.replace('.', ','),
  }
  wordOderCreate(checkArray, baseData)
}