import orderModel from "../models/order-model";
import { IOrder } from "../types/IOrder";


class OrderService {
  async addOrder(order: IOrder) {
    return await orderModel.create(order);
  };

  async getOrderByID(id: string) {
    return await orderModel.findById(id);
  };

  async getAllOrders() {
    return await orderModel.find();
  };
};

export default new OrderService();