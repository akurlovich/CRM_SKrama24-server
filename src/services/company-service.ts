import companyModel from "../models/company-model";
import { ICompaniesQuery, ICompany } from "../types/ICompany";
import { IContact } from "../types/IContact";
import { IDeal } from "../types/IDeal";

class CompanyService {
  async addCompany(company: ICompany, contact: IContact) {
    // company.contactID = contact._id;
    console.log('company server servise', company);
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
    return await companyModel.find(query.find).populate(query.query).limit(query.limit).sort(query.sort);
    // return await companyModel.find().populate({path: 'contactID', options: { sort: {'address.district': 'asc'}}});
    // return await companyModel.find().populate({path: 'contactID', select: "address.district", options: { sort: {'district': 'asc'} }});
    // return await companyModel.find().populate({path: 'contactID', select: "address.district", options: { sort: { "contactID.address.district": -1 } }});
    
  };

  async getCompanyByIDQuery(query: ICompaniesQuery) {
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