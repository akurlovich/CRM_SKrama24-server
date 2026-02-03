import { NextFunction, Request, Response } from "express";
import contactService from "../services/contact-service";
import phoneService from "../services/phone-service";
import { IEntity } from "../types/IComment";
import { IPhoneNewAddContacts, IPhoneUpdate } from "../types/IPhone";

class PhoneController {
  async addPhone(req: Request, res: Response, next: NextFunction) {
    // console.log('newPhone data in req.body', req.body)
    try {
      const { phone, entity } : {phone: IPhoneNewAddContacts, entity: IEntity} = req.body;
      // console.log('newPhone data in data', phone)
      const newPhone = await phoneService.addPhone(phone.phone);
      switch (entity) {
        case 'carrier':
          // console.log('carrier')
          // await carrierService.updateCarrierAddComment(newComment);
          await contactService.updateContactAddPhone(phone.contactID, newPhone);
          break;
        
        case 'company':
          // console.log('company')
          // await companyService.updateCompanyAddComment(newComment);
          await contactService.updateContactAddPhone(phone.contactID, newPhone);
          break;
      
        default:
          break;
      };
      // console.log('newPhone added', newPhone)
      // await contactService.updateContactAddPhone(contactID, newPhone);
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
      const { phone, entity } : {phone: IPhoneUpdate, entity: IEntity} = req.body;
      const phoneUpdated = await phoneService.updatePhoneByID(req.params.id, phone);
      return res.json(phoneUpdated);
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