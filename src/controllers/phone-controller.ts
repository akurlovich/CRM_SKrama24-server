import { NextFunction, Request, Response } from "express";
import contactService from "../services/contact-service";
import phoneService from "../services/phone-service";

class PhoneController {
  async addPhone(req: Request, res: Response, next: NextFunction) {
    try {
      const { contactID, phone } = req.body;
      const newPhone = await phoneService.addPhone(phone);
      await contactService.updateContactAddPhone(contactID, newPhone);
      return res.json(newPhone);
    } catch (error) {
      next(error);
    }
  };

  async getPhoneByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const phone = await phoneService.getPhoneByID(req.params.id);
      return res.json(phone);
    } catch (error) {
      next(error);
    }
  };

  async getAllPhones(req: Request, res: Response, next: NextFunction) {
    try {
      const phones = await phoneService.getAllPhones();
      return res.json(phones);
    } catch (error) {
      next(error);
    }
  };
  
  async updatePhoneByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const phone = await phoneService.updatePhoneByID(req.params.id, req.body);
      return res.json(phone);
    } catch (error) {
      next(error);
    }
  };

  async updatePhoneIsActive(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const phone = await phoneService.updatePhoneByID(req.params.id, req.body);
      return res.json(phone);
    } catch (error) {
      next(error);
    }
  };

  async deletePhoneByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const phone = await phoneService.deletePhoneByID(req.params.id);
      return res.json(phone);
    } catch (error) {
      next(error);
    }
  };
};

export default new PhoneController;