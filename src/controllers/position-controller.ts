import { NextFunction, Request, Response } from "express";
import positionService from "../services/position-service";

class PositionController {
  async addPosition(req: Request, res: Response, next: NextFunction) {
    try {
      const newPosition = await positionService.addPosition(req.body);
      return res.json(newPosition);
    } catch (error) {
      next(error);
    }
  };

  async getPositionByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const position = await positionService.getPositionByID(req.params.id);
      return res.json(position);
    } catch (error) {
      next(error);
    }
  };

  async getAllPositions(req: Request, res: Response, next: NextFunction) {
    try {
      const positions = await positionService.getAllPositions();
      return res.json(positions);
    } catch (error) {
      next(error);
    }
  };
};

export default new PositionController;