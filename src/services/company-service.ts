import companyModel from "../models/company-model";
import { IComment } from "../types/IComment";
import { ICompaniesQuery, ICompany } from "../types/ICompany";
import { IContact } from "../types/IContact";
import { IDeal } from "../types/IDeal";
import { IOrder } from "../types/IOrder";

class CompanyService {
  async addCompany(company: ICompany) {
    // company.contactID = contact._id;
    // console.log('company server servise', company);
    // const newCompany = await companyModel.create(company);
    // return "newCompany";
    return await companyModel.create(company);
  };

  async getCompanyByID(id: string) {
    return await companyModel.findById(id);
  };

  async getAllCompanies() {
    return await companyModel.find();
  };

  async getAllCompaniesPopulateQuery(query: ICompaniesQuery) {
    // console.log(query)
    const count = await companyModel.countDocuments(query.find)
    const companies = await companyModel.find(query.find).populate(query.query).sort(query.sort).skip((query.page * query.limit) - query.limit).limit(query.limit);
    
    // return await companyModel.find(query.find).populate(query.query).sort(query.sort).skip((query.page * query.limit) - query.limit).limit(query.limit);
    return {
      count,
      companies,
    }
    // return await companyModel.find().populate({path: 'contactID', options: { sort: {'address.district': 'asc'}}});
    // return await companyModel.find().populate({path: 'contactID', populate: {path: 'address', select: "district", options: { sort: { "district": -1 } }}});
    // return await companyModel.find().populate({path: 'contactID', select: "address.district", options: { sort: { "contactID.address.district": -1 } }});
    
  };

  async getCompanyByIDQuery(query: ICompaniesQuery) {
    // return await companyModel.findOne({ _id: '65a627a2aa381e0a7e61c8bb' })
    // return await companyModel.findOne(query.find).populate(query.query)
    return await companyModel.findOne(query.find).populate(query.query).limit(query.limit).sort(query.sort);
    // return await companyModel.find().populate(query.query).limit(query.limit).sort({'usersID[0].lastname': 'asc'});
  };

  async getAllCompaniesPopulate() {
    return await companyModel.find().populate({path: 'usersID', select: 'lastname firstname'}).populate({path: 'contactID', select: 'address.district'});
  };

  async updateCompanyAddDeal(deal: IDeal) {
    const company = await companyModel.updateOne({_id: deal.companyID}, { $push: {dealsID: deal}});
    // console.log('first', contact)
    // contact.emailsID.push(email._id);
    // await contact.save;
    return company;
  };

  async updateCompanyAddComment(comment: IComment) {
    const company = await companyModel.updateOne({_id: comment.companyID}, { $push: {commentsID: comment}});
    // console.log('first', contact)
    // contact.emailsID.push(email._id);
    // await contact.save;
    return company;
  };

  async updateCompanyAddOrder(order: IOrder) {
    const company = await companyModel.updateOne({_id: order.companyID}, { $push: {ordersID: order}});
    // console.log('first', contact)
    // contact.emailsID.push(email._id);
    // await contact.save;
    return company;
  };

  async updateCompanyDescription(companyID: string, {description}: {description: string}) {
    const company = await companyModel.findByIdAndUpdate({_id: companyID}, {description});
    // console.log('first', contact)
    // contact.emailsID.push(email._id);
    // await contact.save;
    return company;
  };

  async updateCompanyTitle(companyID: string, {title}: {title: string}) {
    const company = await companyModel.findByIdAndUpdate({_id: companyID}, {title});
    // console.log('first', contact)
    // contact.emailsID.push(email._id);
    // await contact.save;
    return company;
  };

  async updateCompanyUsers(companyID: string, usersID: string[]) {
    await companyModel.findByIdAndUpdate({_id: companyID}, { $set: {usersID: []}}, { new: true });
    const company = await companyModel.findByIdAndUpdate({_id: companyID}, { $push: {usersID: usersID}});
    // console.log('first', contact)
    // contact.emailsID.push(email._id);
    // await contact.save;
    return company;
  };

  //TODO передать id сделки
  async deleteDealFromCompanyByDealID(dealID: string) {
    const company = await companyModel.findOne({dealsID: { _id: dealID}});

    const index = company.dealsID.findIndex(item => item.toString() == dealID)
    company.dealsID.splice(index, 1);
    company.save();

    return company;
  };

  async deleteCompanyByID(id: string) {
    return await companyModel.findByIdAndDelete(id);
  };
};

export default new CompanyService();