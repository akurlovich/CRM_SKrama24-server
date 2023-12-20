import { NextFunction, Request, Response } from "express";
import dealService from "../services/deal-service";

class DealController {
  async addDeal(req: Request, res: Response, next: NextFunction) {
    try {
      const newDeal = await dealService.addDeal(req.body);
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
};

export default new DealController;