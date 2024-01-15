import companyModel from "../models/company-model";
import { ICompany } from "../types/ICompany";


class CompanyService {
  async addCompany(company: ICompany) {
    console.log('company server servise', company);
    return await companyModel.create(company);
  };

  async getCompanyByID(id: string) {
    return await companyModel.findById(id);
  };

  async getAllCompanies() {
    return await companyModel.find();
  };

  async deleteCompanyByID(id: string) {
    return await companyModel.findByIdAndDelete(id);
  };
};

export default new CompanyService();