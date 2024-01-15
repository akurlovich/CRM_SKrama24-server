import { NextFunction, Request, Response } from "express";
import companyService from "../services/company-service";

class CompanyController {
  async addCompany(req: Request, res: Response, next: NextFunction) {
    try {
      // console.log('company server controller', req.body);
      const newCompany = await companyService.addCompany(req.body);
      return res.json(newCompany);
    } catch (error) {
      next(error);
    }
  };

  async getCompanyByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const company = await companyService.getCompanyByID(req.params.id);
      return res.json(company);
    } catch (error) {
      next(error);
    }
  };

  async getAllCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      const companys = await companyService.getAllCompanies();
      return res.json(companys);
    } catch (error) {
      next(error);
    }
  };

  async deleteCompanyByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const company = await companyService.deleteCompanyByID(req.params.id);
      return res.json(company);
    } catch (error) {
      next(error);
    }
  };
};

export default new CompanyController;