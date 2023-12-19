import { NextFunction, Request, Response } from "express";
import emailService from "../services/email-service";

class EmailController {
  async addEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const newEmail = await emailService.addEmail(req.body);
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
};

export default new EmailController;