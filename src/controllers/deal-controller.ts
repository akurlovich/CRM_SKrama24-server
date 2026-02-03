import { NextFunction, Request, Response } from "express";
import companyService from "../services/company-service";
import dealService from "../services/deal-service";
import { IDeal } from "../types/IDeal";
import { IEntity } from "../types/IComment";
import carrierService from "../services/carrier-service";

class DealController {
  async addDeal(req: Request, res: Response, next: NextFunction) {
    // console.log('deal data in req.body', req.body)
    const { deal, entity} : { deal: IDeal, entity: IEntity } = req.body;
    
    try {
      const newDeal = await dealService.addDeal(deal);

      switch (entity) {
        case 'carrier':
          // console.log('carrier')
          await carrierService.updateCarrierAddDeal(newDeal);
          break;
        
        case 'company':
          // console.log('company')
          await companyService.updateCompanyAddDeal(newDeal);
          break;
      
        default:
          break;
      };
    
      // const newDeal = await dealService.addDeal(req.body);
      // await companyService.updateCompanyAddDeal(newDeal)
      // console.log('new deal', newDeal)
      return res.json(newDeal);
    } catch (error) {
      // console.log('error deal', error)
      next(error);
    }
  };

  async getDealByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const deal = await dealService.getDealByID(req.params.id);
      return res.json(deal);
    } catch (error) {
      next(error);
    }
  };

  async getAllDeals(req: Request, res: Response, next: NextFunction) {
    try {
      const deals = await dealService.getAllDeals();
      return res.json(deals);
    } catch (error) {
      next(error);
    }
  };

  async getAllDealsByUserQuery(req: Request, res: Response, next: NextFunction) {
    try {
      const deals = await dealService.getAllDealsByUserQuery(req.body);
      return res.json(deals);
    } catch (error) {
      next(error);
    }
  };

  async getDealsWithQuery(req: Request, res: Response, next: NextFunction) {
    try {
      const deals = await dealService.getDealsWithQuery(req.body);
      return res.json(deals);
    } catch (error) {
      next(error);
    }
  };

  async updateDealByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const deal = await dealService.updateDealByID(req.params.id, req.body);
      return res.json(deal);
    } catch (error) {
      next(error);
    }
  };

  async deleteDealFromCompanyByDealID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      // console.log('deal params delete error', req.params.id)
      const carrier = await carrierService.deleteDealFromCarrierByDealID(req.params.id);
      if (carrier) {
        const deal = await dealService.deleteDealByID(req.params.id);
        // console.log('delete deal', deal)
        return res.json(deal);
      }
      await companyService.deleteDealFromCompanyByDealID(req.params.id);
      const deal = await dealService.deleteDealByID(req.params.id);
      // console.log('delete deal', deal)
      return res.json(deal);

    } catch (error) {
      // console.log('deal delete error', error)
      next(error);
    }
  };
};

export default new DealController;