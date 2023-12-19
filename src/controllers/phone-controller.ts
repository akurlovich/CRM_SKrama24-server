import { NextFunction, Request, Response } from "express";
import phoneService from "../services/phone-service";

class PhoneController {
  async addPhone(req: Request, res: Response, next: NextFunction) {
    try {
      const newPhone = await phoneService.addPhone(req.body);
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
};

export default new PhoneController;