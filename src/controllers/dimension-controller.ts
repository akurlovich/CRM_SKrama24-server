import { NextFunction, Request, Response } from "express";
import dimensionService from "../services/dimension-service";

class DimensionController {
  async addDimension(req: Request, res: Response, next: NextFunction) {
    try {
      const newDimension = await dimensionService.addDimension(req.body);
      return res.json(newDimension);
    } catch (error) {
      next(error);
    }
  };

  async getDimensionByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const dimension = await dimensionService.getDimensionByID(req.params.id);
      return res.json(dimension);
    } catch (error) {
      next(error);
    }
  };

  async getAllDimensions(req: Request, res: Response, next: NextFunction) {
    try {
      const dimensions = await dimensionService.getAllDimensions();
      return res.json(dimensions);
    } catch (error) {
      next(error);
    }
  };

  async getLastDimension(req: Request, res: Response, next: NextFunction) {
    try {
      const dimensions = await dimensionService.getLastDimension();
      return res.json(dimensions);
    } catch (error) {
      next(error);
    }
  };
};

export default new DimensionController;