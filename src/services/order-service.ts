import orderModel from "../models/order-model";
import { IDealsQuery } from "../types/IDeal";
import { IOrder, IOrderNew, IOrderNewWithCount, IOrdersQuery, IOrderUpdateOrderItems } from "../types/IOrder";
import { IOrderItem } from "../types/IOrderItem";
import orderItemService from "./orderItem-service";


class OrderService {
  async addOrder(order: IOrderNew) {
    const lastOrder = await orderModel.find().sort({ createdAt: -1 }).limit(1)
    // console.log(lastOrder[0].orderNumber)
    const count = lastOrder[0].orderNumber;
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

  async getOrdersByCompanyID(id: string) {
    return await orderModel.findById(id);
  };

  async getAllOrders(userID: any, query: IOrdersQuery) {
    // console.log('userID', userID)
    // console.log("query", query.query)
    // let { userid } = req.query;
    
    if (userID.userid) {
      return await orderModel.find({ usersID: userID.userid }).populate(query.query).sort(query.sort).limit(query.limit);
    }
    // return await orderModel.find().populate(query.query).sort(query.sort).skip((query.page * query.limit) - query.limit).limit(query.limit);
    return await orderModel.find().populate(query.query).sort(query.sort).limit(query.limit);
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

  async updateOrderStatus(id: string, status: any) {
    // console.log(status)
    const order = await orderModel.findByIdAndUpdate({_id: id}, {status: status.status}, { returnOriginal: false });
    // const order = await orderModel.findOneAndUpdate({_id: id}, { $push: { status: status.status }}, { returnOriginal: false });
    // console.log(order)
    
    return 'order';
    // return await orderModel.deleteMany({});
  };

  async deleteOrderByID(id: string) {
    const order = await orderModel.findById(id);
    if (order) {
      await orderItemService.deleteAllOrderOrderItems(order.orderItemID)
    }
    return await orderModel.findByIdAndDelete(id);
    // return await orderModel.deleteMany({});
  };
};

export default new OrderService();