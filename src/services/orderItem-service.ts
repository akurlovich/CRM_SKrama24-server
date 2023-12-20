import orderItemModel from "../models/orderItem-model";
import { IOrderItem } from "../types/IOrderItem";


class OrderItemService {
  async addOrderItem(orderItem: IOrderItem) {
    return await orderItemModel.create(orderItem);
  };

  async getOrderItemByID(id: string) {
    return await orderItemModel.findById(id);
  };

  async getAllOrderItems() {
    return await orderItemModel.find();
  };
};

export default new OrderItemService();