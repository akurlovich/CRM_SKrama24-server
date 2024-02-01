import orderModel from "../models/order-model";
import { IOrder, IOrderNew, IOrderNewWithCount, IOrderUpdateOrderItems } from "../types/IOrder";
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
    const newFileName: string = 'Счёт_СКРАМ-Материалы_' + (count + 1) + '.docx';
    // await orderModel.updateOne({_id: orderNew._id}, { $push: { fileName: fileName}});
    // const orderWithFFileName = await orderModel.findOne({_id: orderNew._id});
    const orderWithFileName = await orderModel.findOneAndUpdate({_id: orderNew._id}, { $push: { fileName: newFileName }}, { returnOriginal: false });

    return {
      order: orderWithFileName,
      count: count,
      fileName: newFileName,
    }
  };

  async getOrderByID(id: string) {
    return await orderModel.findById(id);
  };

  async getAllOrders() {
    return await orderModel.find();
  };

  async updateAddOrderItemsByOrderID(orderID: string, items: IOrderItem[], fileNameNew: string) {
    return await orderModel.findOneAndUpdate({_id: orderID}, { $push: { orderItemID: items }}, { returnOriginal: false });
  };

  async updateOrderItemsByOrderID(order: IOrderUpdateOrderItems, items: IOrderItem[], fileNameNew: string) {
// !   взять имя файла из fileName arr  а версия длинна масива
    await orderModel.updateOne({_id: order.orderID}, { $set: { orderItemID: [] }});
    await orderModel.findOneAndUpdate({_id: order.orderID}, { $push: { orderItemID: items }}, { returnOriginal: false });
    await orderModel.findOneAndUpdate({_id: order.orderID}, { $push: { fileName: fileNameNew }}, { returnOriginal: false });
    return await orderModel.findOneAndUpdate({_id: order.orderID}, { totalSum: order.totalSum }, { returnOriginal: false });
  };

  async deleteOrderByID(id: string) {
    return await orderModel.findByIdAndDelete(id);
    // return await orderModel.deleteMany({});
  };
};

export default new OrderService();