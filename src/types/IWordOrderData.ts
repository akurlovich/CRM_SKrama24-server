export interface IWordOrderData {
  orderID: string,
  item: number;
  title: string;
  dimension: string;
  count: string;
  price: string;
  sum: string;
  vatRate: number;
  vatSum: string;
  totalSum: string;
}

export interface ICommonData {
  orderNumber: string,
  orderDate: string,
  companyTitle: string,
  sum: string,
  vatSum: string,
  totalSum: string,
  vatSumWords: string,
  totalSumWords: string,
}