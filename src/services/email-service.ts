import emailModel from "../models/email-model";
import { IEmail, IEmailUpdate } from "../types/IEmail";


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

  async updateEmailByID(id: string, email: IEmailUpdate) {
    return await emailModel.findByIdAndUpdate({_id: id}, email);
  };

  async deleteEmailByID(id: string) {
    return await emailModel.findByIdAndDelete(id);
  };
};

export default new EmailService();