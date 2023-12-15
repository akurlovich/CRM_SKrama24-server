import { NextFunction, Request, Response } from "express";
import dealTitleService from "../services/dealTitle-service";

class DealTitleController {
  async addDealTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const newDealTitle = await dealTitleService.addDealTitle(req.body);
      return res.json(newDealTitle);
    } catch (error) {
      next(error);
    }
  };

  async getDealTitleByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const dealTitle = await dealTitleService.getDealTitleByID(req.params.id);
      return res.json(dealTitle);
    } catch (error) {
      next(error);
    }
  };

  async getAllDealTitles(req: Request, res: Response, next: NextFunction) {
    try {
      const dealTitles = await dealTitleService.getAllDealTitles();
      return res.json(dealTitles);
    } catch (error) {
      next(error);
    }
  };
};

export default new DealTitleController;