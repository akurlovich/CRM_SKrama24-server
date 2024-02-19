import phoneModel from "../models/phone-model";
import { IPhone, IPhoneUpdate } from "../types/IPhone";

class PhoneService {
  async addPhone(phone: IPhone) {
    return await phoneModel.create(phone);
  };

  async getPhoneByID(id: string) {
    return await phoneModel.findById(id);
  };

  async getAllPhones() {
    return await phoneModel.find();
  };

  async updatePhoneByID(id: string, phone: IPhoneUpdate) {
    return await phoneModel.findByIdAndUpdate({_id: id}, phone);
  };

  async updatePhoneIsActive(id: string, isActive: any) {
    return await phoneModel.findByIdAndUpdate({_id: id}, isActive);
  };

  async deletePhoneByID(id: string) {
    return await phoneModel.findByIdAndDelete(id);
  };
};

export default new PhoneService();