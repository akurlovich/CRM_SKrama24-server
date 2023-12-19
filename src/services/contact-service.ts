import contactModel from "../models/contact-model";
import { IContact } from "../types/IContact";


class ContactService {
  async addContact(contact: IContact) {
    return await contactModel.create(contact);
  };

  async getContactByID(id: string) {
    return await contactModel.findById(id);
  };

  async getAllContacts() {
    return await contactModel.find();
  };
};

export default new ContactService();