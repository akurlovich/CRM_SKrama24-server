import contactModel from "../models/contact-model";
import { IContact, IContactRequest } from "../types/IContact";
import { IEmail } from "../types/IEmail";
import { IPhone } from "../types/IPhone";

class ContactService {
  async addContact(contact: IContactRequest) {
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

  async updateContactCompanyID(id: string, companyID: string) {
    return await contactModel.findByIdAndUpdate({_id: id}, {companyID: companyID}, {new: true});
  };

  async updateContactPhone(id: string, phone: IPhone) {
    return await contactModel.updateOne({_id: id}, { $push: {phonesID: phone}});
  };

  async updateContactEmail(id: string, email: IEmail) {
    const contact = await contactModel.updateOne({_id: id}, { $push: {emailsID: email}});
    // console.log('first', contact)
    // contact.emailsID.push(email._id);
    // await contact.save;
    return contact;
  };

  async deleteContactByID(id: string) {
    return await contactModel.findByIdAndDelete(id);
  };
};

export default new ContactService();