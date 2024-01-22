import { NextFunction, Request, Response } from "express";
import companyService from "../services/company-service";
import dealService from "../services/deal-service";

class DealController {
  async addDeal(req: Request, res: Response, next: NextFunction) {
    try {
      const { companyID, deal } = req.body;
      const newDeal = await dealService.addDeal(deal);
      await companyService.updateCompanyAddDeal(companyID, deal)
      return res.json(newDeal);
    } catch (error) {
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
      await companyService.deleteDealFromCompanyByDealID(req.params.id);
      const deal = await dealService.deleteDealByID(req.params.id);

      return res.json(deal);
    } catch (error) {
      next(error);
    }
  };
};

export default new DealController;