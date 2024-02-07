import { NextFunction, Request, Response } from "express";
import { Schema } from "mongoose";
import companyService from "../services/company-service";
import orderService from "../services/order-service";
import orderItemService from "../services/orderItem-service";
import { IOrderNew, IOrderUpdateOrderItems } from "../types/IOrder";
import { IOrderItem, IOrderItemNew, IOrderItemNewAdd } from "../types/IOrderItem";
import { ICommonData, IWordOrderData } from "../types/IWordOrderData";
import { billForOrder } from "../utils/billForOrder";
import { wordOderCreate } from "../utils/wordOderCreate";

class OrderController {
  async addOrder(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("new", req.body)
      const { order, orderItems }: {order: IOrderNew, orderItems: IOrderItemNew[]} = req.body;
      const companyTitle = await companyService.getCompanyByID(order.companyID);
      const newOrder = await orderService.addOrder(order);
      const newOrderItemsArr: IOrderItemNewAdd[] = [] as IOrderItemNewAdd[];

      for (let item of orderItems) {
        const data: IOrderItemNewAdd = {
          orderID: newOrder.order._id.toString(),
          //@ts-ignore
          productID: item.productID as Schema.Types.ObjectId,
          price: item.price,
          count: item.count,
          sum: item.totalSum,
        }
        newOrderItemsArr.push(data)
      }
      const newOrderItems = await orderItemService.addOrderItem(newOrderItemsArr);

      console.log('newOrderItems', newOrderItems)
      //@ts-ignore
      const orderWithOrderItems = await orderService.updateAddOrderItemsByOrderID(newOrder.order._id, newOrderItems)

      await companyService.updateCompanyAddOrder(newOrder.order);
      billForOrder(orderItems, newOrder.order._id, companyTitle.title, (newOrder.count + 1).toString(), newOrder.fileName);

      return res.json(orderWithOrderItems);
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
      const orders = await orderService.getAllOrders(req);
      return res.json(orders);
    } catch (error) {
      next(error);
    }
  };

  async updateOrderItemsByOrderID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      // console.log("update", req.body)
      const { order, orderItems }: {order: IOrderUpdateOrderItems, orderItems: IOrderItemNew[]} = req.body;
      const foundOrder = await orderService.getOrderByID(req.params.id);
      for (let item of foundOrder.orderItemID) {
        await orderItemService.deleteOrderItemByID(item.toString());
      };
      const newOrderItemsArr: IOrderItemNewAdd[] = [] as IOrderItemNewAdd[];

      for (let item of orderItems) {
        const data: IOrderItemNewAdd = {
          orderID: order.orderID,
          //@ts-ignore
          productID: item.productID as Schema.Types.ObjectId,
          price: item.price,
          count: item.count,
          sum: item.totalSum,
        }
        newOrderItemsArr.push(data)
      }
      const newOrderItems = await orderItemService.addOrderItem(newOrderItemsArr);
      // console.log('newOrderItems', newOrderItems)
      const newFileName: string = 'Счёт_СКРАМ-Материалы_' + foundOrder.orderNumber + '_v' + (foundOrder.fileName.length + 1) + '.docx';
      //@ts-ignore
      const orderUpdate = await orderService.updateOrderItemsByOrderID(order, newOrderItems, newFileName);
      //!  создать файл счета
      // console.log(newFileName)
      // console.log("orderUpdate", orderUpdate)
      const companyTitle = await companyService.getCompanyByID(foundOrder.companyID.toString());
      billForOrder(orderItems, req.params.id, companyTitle.title, (foundOrder.orderNumber).toString(), newFileName)
      return res.json(orderUpdate);
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