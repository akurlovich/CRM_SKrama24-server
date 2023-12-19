import emailModel from "../models/email-model";
import { IEmail } from "../types/IEmail";


class EmailService {
  async addEmail(email: IEmail) {
    return await emailModel.create(email);
  };

  async getEmailByID(id: string) {
    return await emailModel.findById(id);
  };

  async getAllEmails() {
    return await emailModel.find();
  };
};

export default new EmailService();