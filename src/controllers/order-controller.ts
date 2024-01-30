import { NextFunction, Request, Response } from "express";
import { Schema } from "mongoose";
import companyService from "../services/company-service";
import orderService from "../services/order-service";
import orderItemService from "../services/orderItem-service";
import { IOrderNew } from "../types/IOrder";
import { IOrderItem, IOrderItemNew, IOrderItemNewAdd } from "../types/IOrderItem";
import { ICommonData, IWordOrderData } from "../types/IWordOrderData";
import { wordOderCreate } from "../utils/wordOderCreate";

class OrderController {
  async addOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { order, orderItems }: {order: IOrderNew, orderItems: IOrderItemNew[]} = req.body;
      const companyTitle = await companyService.getCompanyByID(order.companyID)
      // const newOrder = await orderService.addOrder(order);
      // const newOrderItemsArr: IOrderItemNewAdd[] = [] as IOrderItemNewAdd[];

      // for (let item of orderItems) {
      //   const data: IOrderItemNewAdd = {
      //     orderID: newOrder._id,
      //     //@ts-ignore
      //     productID: item.productID as Schema.Types.ObjectId,
      //     price: item.price,
      //     count: item.count,
      //     sum: item.totalSum,
      //   }
      //   newOrderItemsArr.push(data)
      // }
      // await orderItemService.addOrderItem(newOrderItemsArr);
      // await companyService.updateCompanyAddOrder(newOrder);
  //!---  создание счета
      const checkArray: IWordOrderData[] = [] as IWordOrderData[];
      for (let i = 0; i < orderItems.length; i++) {
        const newCheck: IWordOrderData = {
  //TODO заменить на orderID, и подумать когда несколько счетов в одной order
          orderID: order.companyID,
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
      }
      const sum = checkArray.reduce((s, cur) => {
        return s + cur.sum
      }, 0)
      const vatSum = checkArray.reduce((s, cur) => {
        return s + cur.vatSum
      }, 0)
      const totalSum = checkArray.reduce((s, cur) => {
        return s + cur.totalSum
      }, 0)
      
      const baseData: ICommonData = {
        companyTitle: companyTitle.title,
        // orderNumber: newOrder.orderNumber,
        orderNumber: "123",
        orderDate: "21 января 2024",
        sum: sum.toFixed(2),
        vatSum: vatSum.toFixed(2),
        totalSum: totalSum.toFixed(2),
      }
      wordOderCreate(checkArray, baseData)

      return res.json('newOrder');
    } catch (error) {
      next(error);
    }
  };

  async getOrderByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const order = await orderService.getOrderByID(req.params.id);
      return res.json(order);
    } catch (error) {
      next(error);
    }
  };

  async getAllOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await orderService.getAllOrders();
      return res.json(orders);
    } catch (error) {
      next(error);
    }
  };

  async deleteOrderByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const email = await orderService.deleteOrderByID(req.params.id);
      return res.json(email);
    } catch (error) {
      next(error);
    }
  };
};

export default new OrderController;