import companyModel from "../models/company-model";
import { ICompany } from "../types/ICompany";


class CompanyService {
  async addCompany(company: ICompany) {
    return await companyModel.create(company);
  };

  async getCompanyByID(id: string) {
    return await companyModel.findById(id);
  };

  async getAllCompanys() {
    return await companyModel.find();
  };
};

export default new CompanyService();