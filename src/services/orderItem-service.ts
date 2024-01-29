import orderItemModel from "../models/orderItem-model";
import { IOrderItem, IOrderItemNewAdd } from "../types/IOrderItem";


class OrderItemService {
  async addOrderItem(orderItem: IOrderItemNewAdd[]) {
    return await orderItemModel.insertMany(orderItem);
  };

  async getOrderItemByID(id: string) {
    return await orderItemModel.findById(id);
  };

  async getAllOrderItems() {
    return await orderItemModel.find();
  };

  async deleteOrderItemByID(id: string) {
    return await orderItemModel.findByIdAndDelete(id);
  };
};

export default new OrderItemService();