import { NextFunction, Request, Response } from "express";
import companyService from "../services/company-service";

class CompanyController {
  async addCompany(req: Request, res: Response, next: NextFunction) {
    try {
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

  async getAllCompanys(req: Request, res: Response, next: NextFunction) {
    try {
      const companys = await companyService.getAllCompanys();
      return res.json(companys);
    } catch (error) {
      next(error);
    }
  };
};

export default new CompanyController;