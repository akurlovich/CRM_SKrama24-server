import { NextFunction, Request, Response } from "express";
import orderItemService from "../services/orderItem-service";

class OrderItemController {
  async addOrderItem(req: Request, res: Response, next: NextFunction) {
    try {
      // console.log('orderItems', req.body)
      const newOrderItem = await orderItemService.addOrderItem(req.body);
      return res.json(newOrderItem);
    } catch (error) {
      next(error);
    }
  };

  async getOrderItemByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const orderItem = await orderItemService.getOrderItemByID(req.params.id);
      return res.json(orderItem);
    } catch (error) {
      next(error);
    }
  };

  async getAllOrderItems(req: Request, res: Response, next: NextFunction) {
    try {
      const orderItems = await orderItemService.getAllOrderItems();
      return res.json(orderItems);
    } catch (error) {
      next(error);
    }
  };

  async deleteOrderItemByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const email = await orderItemService.deleteOrderItemByID(req.params.id);
      return res.json(email);
    } catch (error) {
      next(error);
    }
  };
};

export default new OrderItemController;