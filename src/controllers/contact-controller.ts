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

  async getAllContacts(req: Request, res: Response, next: NextFunction) {
    try {
      const contacts = await contactService.getAllContacts();
      return res.json(contacts);
    } catch (error) {
      next(error);
    }
  };
};

export default new ContactController;