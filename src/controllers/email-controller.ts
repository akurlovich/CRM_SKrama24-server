import { NextFunction, Request, Response } from "express";
import contactService from "../services/contact-service";
import emailService from "../services/email-service";

class EmailController {
  async addEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { contactID, email } = req.body;
      const newEmail = await emailService.addEmail(email);
      await contactService.updateContactAddEmail(contactID, newEmail);
      return res.json(newEmail);
    } catch (error) {
      next(error);
    }
  };

  async getEmailByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const email = await emailService.getEmailByID(req.params.id);
      return res.json(email);
    } catch (error) {
      next(error);
    }
  };

  async getAllEmails(req: Request, res: Response, next: NextFunction) {
    try {
      const emails = await emailService.getAllEmails();
      return res.json(emails);
    } catch (error) {
      next(error);
    }
  };

  async updateEmailByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const email = await emailService.updateEmailByID(req.params.id, req.body);
      return res.json(email);
    } catch (error) {
      next(error);
    }
  };

  async updateEmailIsActive(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const email = await emailService.updateEmailIsActive(req.params.id, req.body);
      return res.json(email);
    } catch (error) {
      next(error);
    }
  };

  async deleteEmailByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const email = await emailService.deleteEmailByID(req.params.id);
      return res.json(email);
    } catch (error) {
      next(error);
    }
  };
};

export default new EmailController;