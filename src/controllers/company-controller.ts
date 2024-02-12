import { NextFunction, Request, Response } from "express";
import { Schema } from "mongoose";
import companyService from "../services/company-service";
import contactService from "../services/contact-service";
import phoneService from "../services/phone-service";
import { ICompany } from "../types/ICompany";
import { IContactRequest, IContactAddressRequest } from "../types/IContact";
import { IPhone } from "../types/IPhone";
import { IEmail } from "../types/IEmail";
import emailService from "../services/email-service";
import dealService from "../services/deal-service";
import orderService from "../services/order-service";
import commentService from "../services/comment-service";

class CompanyController {
  async addCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { company, contact }: {company: ICompany, contact: IContactRequest} = req.body;
      // console.log('company server controller', req.body);

      const redyContact: IContactAddressRequest = {
        address: {
          main: contact.address.main,
          district: contact.address.district,
        },
      }
      const newContact = await contactService.addContact(redyContact);
      // console.log('newContact', newContact);
      company.contactID = newContact._id;

      const newCompany = await companyService.addCompany(company);
      await contactService.updateContactCompanyID(newContact._id, newCompany._id);

      if (contact.phonesID.number) {
        //@ts-ignore
        const phone: IPhone = {
          companyID: newCompany._id,
          number: contact.phonesID.number,
          description: contact.phonesID.description,
        };
        const newPhone = await phoneService.addPhone(phone);
        await contactService.updateContactAddPhone(newContact._id, newPhone);
      }

      if (contact.emailsID.email) {
        //@ts-ignore
        const email: IEmail = {
          companyID: newCompany._id,
          email: contact.emailsID.email,
          description: contact.emailsID.description,
        };
  
        const newEmail = await emailService.addEmail(email);
        await contactService.updateContactAddEmail(newContact._id, newEmail);

      }

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
      // console.log('companies', companies)
      return res.json(companies);
    } catch (error) {
      next(error);
    }
  };

  async getAllCompaniesPopulateQuery(req: Request, res: Response, next: NextFunction) {
    try {
      // const { query } = req.body;
      // console.log('query', query);
      // console.log('body', req.body);
      const companies = await companyService.getAllCompaniesPopulateQuery(req.body);
      // console.log('companies', companies)
      return res.json(companies);
    } catch (error) {
      next(error);
    }
  };

  async getCompanyByIDQuery(req: Request, res: Response, next: NextFunction) {
    try {
      // const { query } = req.body;
      // console.log('query', query);
      // console.log('body', req.body);
      const company = await companyService.getCompanyByIDQuery(req.body);
      // console.log('company', company)
      return res.json(company);
    } catch (error) {
      next(error);
    }
  };

  async getAllCompaniesPopulate(req: Request, res: Response, next: NextFunction) {
    try {
      const companies = await companyService.getAllCompaniesPopulate();
      // console.log('companies', companies)
      return res.json(companies);
    } catch (error) {
      next(error);
    }
  };

  async updateCompanyDescription(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const company = await companyService.updateCompanyDescription(req.params.id, req.body);
      // console.log('companies', companies)
      return res.json(company);
    } catch (error) {
      next(error);
    }
  };

  async deleteCompanyByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const company = await companyService.getCompanyByID(req.params.id); 
      await contactService.deleteContactByID(company.contactID.toString())
      await dealService.deleteAllCompanyDeals(company.dealsID)
      for (let item of company.ordersID) {
        await orderService.deleteOrderByID(item.toString())
      }
      await commentService.deleteAllCompanyComments(company.commentsID)

      // console.log(company)
      const companyDelete = await companyService.deleteCompanyByID(req.params.id);
      return res.json(companyDelete);
    } catch (error) {
      next(error);
    }
  };
};

export default new CompanyController;