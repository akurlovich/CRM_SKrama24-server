import { Schema } from "mongoose";
import contactModel from "../models/contact-model";
import { IContact, IContactAddressRequest, IContactRequest } from "../types/IContact";
import { IEmail } from "../types/IEmail";
import { IPhone } from "../types/IPhone";

class ContactService {
  async addContact(contact: IContactAddressRequest) {
    // console.log('servise contact туц', contact)
    const newContact = await contactModel.create(contact);
    return newContact;
  };

  async getContactByID(id: string) {
    return await contactModel.findById(id);
  };

  async getContactByPhoneID(id: string) {
    //TODO ищет среди всех контактов id телефона
    // return await contactModel.findOne({phonesID: { _id: id}});
    const contact = await contactModel.findOne({phonesID: { _id: id}});
    // console.log('1', contact.phonesID.filter(item => {
    //   console.log('item', item.toString())
    //   console.log('id', id)
    //   // item !== id
    // } ));
    // contact.phonesID.filter(item => item.toString() != id);

    // const index = contact.phonesID.findIndex(item => item.toString() == id)
    // contact.phonesID.splice(index, 1)

    return contact;
  };

  //TODO передать id телефона
  async deletePhoneFromContactByPhoneID(phoneID: string) {
    const contact = await contactModel.findOne({phonesID: { _id: phoneID}});

    const index = contact.phonesID.findIndex(item => item.toString() == phoneID)
    contact.phonesID.splice(index, 1)
    contact.save();

    return contact;
  };

  //TODO передать id email
  async deleteEmailFromContactByEmailID(emailID: string) {
    // console.log("emailID", emailID)
    const contact = await contactModel.findOne({emailsID: { _id: emailID}});

    // console.log("contact", contact)

    const index = contact.emailsID.findIndex(item => item.toString() == emailID)
    contact.emailsID.splice(index, 1)
    contact.save();

    return contact;
  };

  async getAllContacts() {
    return await contactModel.find();
    // return await contactModel.find().sort({'address.district': -1});
    // return await contactModel.find({'address.district': /пинск/i})
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

  async updateContactAddPhone(id: string, phone: IPhone) {
    return await contactModel.updateOne({_id: id}, { $push: {phonesID: phone}});
  };

  async updateContactAddEmail(id: string, email: IEmail) {
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