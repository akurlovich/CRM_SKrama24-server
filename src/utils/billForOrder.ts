import { IOrderItemNew } from "../types/IOrderItem";
import { ICommonData, IWordOrderData } from "../types/IWordOrderData";
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
        count: orderItems[i].count,
        price: +orderItems[i].price.toFixed(2),
        sum: +orderItems[i].sum.toFixed(2),
        vatRate: 20,
        vatSum: +orderItems[i].vatSum.toFixed(2),
        totalSum: +orderItems[i].totalSum.toFixed(2),
      }
      checkArray.push(newCheck)
    };

  const sum = checkArray.reduce((s, cur) => { return s + cur.sum }, 0);
  const vatSum = checkArray.reduce((s, cur) => { return s + cur.vatSum }, 0);
  const totalSum = checkArray.reduce((s, cur) => { return s + cur.totalSum }, 0);

  const today = new Date(); 
  const months = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ];
  const date = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
  
  const baseData: ICommonData = {
    companyTitle: companyTitle,
    // orderNumber: newOrder.orderNumber,
    orderNumber: orderNumber,
    orderDate: date,
    sum: sum.toFixed(2),
    vatSum: vatSum.toFixed(2),
    totalSum: totalSum.toFixed(2),
    vatSumWords: '',
    totalSumWords: '',
  }
  wordOderCreate(checkArray, baseData)
}