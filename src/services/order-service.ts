import orderModel from "../models/order-model";
import { IOrder, IOrderNew, IOrderNewWithCount } from "../types/IOrder";
import { IOrderItem } from "../types/IOrderItem";


class OrderService {
  async addOrder(order: IOrderNew) {
    const count = await orderModel.find().countDocuments();
    const newOrder: IOrderNewWithCount = {
      orderNumber: count + 1,
      companyID: order.companyID,
      usersID: order.usersID,
      totalSum: order.totalSum
    };
    const orderNew = await orderModel.create(newOrder);
    const newFileName: string = orderNew._id + (count + 1) + '.docx';
    // await orderModel.updateOne({_id: orderNew._id}, { $push: { fileName: fileName}});
    // const orderWithFFileName = await orderModel.findOne({_id: orderNew._id});
    const orderWithFFileName = await orderModel.findOneAndUpdate({_id: orderNew._id}, { $push: { fileName: newFileName }}, { returnOriginal: false });

    return {
      order: orderWithFFileName,
      count: count,
    }
  };

  async getOrderByID(id: string) {
    return await orderModel.findById(id);
  };

  async getAllOrders() {
    return await orderModel.find();
  };

  async updateOrderItemsByOrderID(id: string, items: IOrderItem[]) {
    return await orderModel.findOneAndUpdate({_id: id}, { $push: { orderItemID: items }}, { returnOriginal: false });
  };

  async deleteOrderByID(id: string) {
    return await orderModel.findByIdAndDelete(id);
    // return await orderModel.deleteMany({});
  };
};

export default new OrderService();