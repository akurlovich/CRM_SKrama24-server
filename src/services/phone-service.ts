import phoneModel from "../models/phone-model";
import { IPhone } from "../types/IPhone";


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
};

export default new PhoneService();