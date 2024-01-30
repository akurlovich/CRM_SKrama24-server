import orderModel from "../models/order-model";
import { IOrder, IOrderNew, IOrderNewWithCount } from "../types/IOrder";


class OrderService {
  async addOrder(order: IOrderNew) {
    const count = await orderModel.find().countDocuments();
    const newOrder: IOrderNewWithCount = {
      orderNumber: count + 1,
      companyID: order.companyID,
      usersID: order.usersID,
      totalSum: order.totalSum
    }
    const orderNew = await orderModel.create(newOrder);
    return {
      order: orderNew,
      count: count,
    }
  };

  async getOrderByID(id: string) {
    return await orderModel.findById(id);
  };

  async getAllOrders() {
    return await orderModel.find();
  };

  async deleteOrderByID(id: string) {
    return await orderModel.findByIdAndDelete(id);
  };
};

export default new OrderService();