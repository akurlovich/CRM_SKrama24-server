import { NextFunction, Request, Response } from "express";
import companyService from "../services/company-service";
import contactService from "../services/contact-service";

class CompanyController {
  async addCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { company, contact } = req.body;
      console.log('company server controller', req.body);
      const newContact = await contactService.addContact(contact);
      console.log('newContact', newContact);

      const newCompany = await companyService.addCompany(company, newContact);
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
      const companies = await companyService.getAllCompanies();
      console.log('companies', companies)
      return res.json(companies);
    } catch (error) {
      next(error);
    }
  };

  async getAllCompaniesPopulate(req: Request, res: Response, next: NextFunction) {
    try {
      const companies = await companyService.getAllCompaniesPopulate();
      console.log('companies', companies)
      return res.json(companies);
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