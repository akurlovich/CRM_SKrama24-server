import positionModel from "../models/position-model";
import { IPosition } from "../types/IPosition";


class PositionService {
  async addPosition(position: IPosition) {
    return await positionModel.create(position);
  };

  async getPositionByID(id: string) {
    return await positionModel.findById(id);
  };

  async getAllPositions() {
    return await positionModel.find();
  };
};

export default new PositionService();