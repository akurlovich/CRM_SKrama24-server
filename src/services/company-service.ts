import companyModel from "../models/company-model";
import { ICompaniesQuery, ICompany } from "../types/ICompany";
import { IContact } from "../types/IContact";

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
    return await companyModel.find().populate(query.query).limit(query.limit).sort(query.sort);
  };

  async getAllCompaniesPopulate() {
    return await companyModel.find().populate({path: 'usersID', select: 'lastname firstname'}).populate({path: 'contactID', select: 'address.district'});
  };

  async deleteCompanyByID(id: string) {
    return await companyModel.findByIdAndDelete(id);
  };
};

export default new CompanyService();