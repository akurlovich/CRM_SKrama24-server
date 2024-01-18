import { NextFunction, Request, Response } from "express";
import contactService from "../services/contact-service";

class ContactController {
  async addContact(req: Request, res: Response, next: NextFunction) {
    try {
      const newContact = await contactService.addContact(req.body);
      return res.json(newContact);
    } catch (error) {
      next(error);
    }
  };

  async getContactByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const contact = await contactService.getContactByID(req.params.id);
      return res.json(contact);
    } catch (error) {
      next(error);
    }
  };

  async getContactByPhoneID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const contact = await contactService.getContactByPhoneID(req.params.id);
      return res.json(contact);
    } catch (error) {
      next(error);
    }
  };

  async deletePhoneFromContactByPhoneID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const contact = await contactService.deletePhoneFromContactByPhoneID(req.params.id);
      return res.json(contact);
    } catch (error) {
      next(error);
    }
  };

  async getAllContacts(req: Request, res: Response, next: NextFunction) {
    try {
      const contacts = await contactService.getAllContacts();
      return res.json(contacts);
    } catch (error) {
      next(error);
    }
  };

  async updateContact(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      // {
      //   "address": {
      //   "main": "string",
      //   "district": "string"
      //   },
      //   "phones": [{
      //   "phonesID": "string",
      //   "number": "string",
      //   "description": "string"
      //   }]
      // }
      const { company, address, phone, email } = req.body;

      if (address) {
        const contact = await contactService.updateContactAddress(req.params.id, address);
        return res.json(contact);
      };

      if (company) {
        const contact = await contactService.updateContactCompany(req.params.id, company);
        return res.json(contact);
      }
      
      // if (price) {
      //   const product = await contactService.updateContact(req.params.id, price, 'price');
      //   return res.json(product);
      // }
      // if (views) {
      //   const product = await contactService.updateContact(req.params.id, views, 'views');
      //   return res.json(product);
      // }
    } catch (error) {
      next(error);
    }
  };

  async deleteContactByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const contact = await contactService.deleteContactByID(req.params.id);
      return res.json(contact);
    } catch (error) {
      next(error);
    }
  };
};

export default new ContactController;