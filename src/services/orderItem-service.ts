import { ObjectId } from "mongoose";
import orderItemModel from "../models/orderItem-model";
import { IOrderItem, IOrderItemNewAdd } from "../types/IOrderItem";


class OrderItemService {
  async addOrderItem(orderItem: IOrderItemNewAdd[]) {
    const items = await orderItemModel.insertMany(orderItem);
    return items
  };

  async getOrderItemByID(id: string) {
    return await orderItemModel.findById(id);
  };

  async getAllOrderItems() {
    return await orderItemModel.find();
  };

  async deleteOrderItemByID(id: string) {
    return await orderItemModel.findByIdAndDelete(id);
    // return await orderItemModel.deleteMany({});
  };

  async deleteAllOrderOrderItems(ids: ObjectId[]) {
    return await orderItemModel.deleteMany({_id: ids});
    // return await orderItemModel.deleteMany({});
  };
};

export default new OrderItemService();