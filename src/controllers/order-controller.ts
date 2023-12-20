import { NextFunction, Request, Response } from "express";
import orderService from "../services/order-service";

class OrderController {
  async addOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const newOrder = await orderService.addOrder(req.body);
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
};

export default new OrderController;