import companyModel from "../models/company-model";
import { ICompany } from "../types/ICompany";
import { IContact } from "../types/IContact";

class CompanyService {
  async addCompany(company: ICompany, contact: IContact) {
    company.contactID = contact._id;
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

  async getAllCompaniesPopulate() {
    return await companyModel.find().populate({path: 'usersID', select: 'lastname firstname'}).populate({path: 'contactID', select: 'address.district'});
  };

  async deleteCompanyByID(id: string) {
    return await companyModel.findByIdAndDelete(id);
  };
};

export default new CompanyService();