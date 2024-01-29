import { NextFunction, Request, Response } from "express";
import { Schema } from "mongoose";
import companyService from "../services/company-service";
import orderService from "../services/order-service";
import orderItemService from "../services/orderItem-service";
import { IOrderNew } from "../types/IOrder";
import { IOrderItem, IOrderItemNew, IOrderItemNewAdd } from "../types/IOrderItem";

class OrderController {
  async addOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { order, orderItems }: {order: IOrderNew, orderItems: IOrderItemNew[]} = req.body;
      const newOrder = await orderService.addOrder(order);
      const newOrderItemsArr: IOrderItemNewAdd[] = [] as IOrderItemNewAdd[];

      for (let item of orderItems) {
        const data: IOrderItemNewAdd = {
          orderID: newOrder._id,
          //@ts-ignore
          productID: item.productID as Schema.Types.ObjectId,
          price: item.price,
          count: item.count,
          sum: item.sum,
        }
        newOrderItemsArr.push(data)
      }
      await orderItemService.addOrderItem(newOrderItemsArr);
      await companyService.updateCompanyAddOrder(newOrder);
      return res.json(newOrder);
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