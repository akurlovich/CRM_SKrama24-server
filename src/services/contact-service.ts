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

  // async updateContact(id: string, key: string, data: string) {
  async updateContactAddress(id: string, {main, district}: {main: string, district: string}) {
    return await contactModel.findByIdAndUpdate({_id: id}, {address: {main, district}}, {new: true});
  };

  async updateContactCompany(id: string, {companyID, title}: {companyID: string, title: string}) {
    return await contactModel.findByIdAndUpdate({_id: id}, {company: {companyID, title}}, {new: true});
  };

  async deleteContactByID(id: string) {
    return await contactModel.findByIdAndDelete(id);
  };
};

export default new ContactService();