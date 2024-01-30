export interface IWordOrderData {
  orderID: string,
  item: number;
  title: string;
  dimension: string;
  count: number;
  price: number;
  sum: number;
  vatRate: number;
  vatSum: number;
  totalSum: number;
}

export interface ICommonData {
  orderNumber: string,
  orderDate: string,
  companyTitle: string,
  sum: string,
  vatSum: string,
  totalSum: string,
}