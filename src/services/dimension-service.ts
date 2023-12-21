import dimensionModel from "../models/dimension-model";
import { IDimension } from "../types/IDimension";


class DimensionService {
  async addDimension(dimension: IDimension) {
    return await dimensionModel.create(dimension);
  };

  async getDimensionByID(id: string) {
    return await dimensionModel.findById(id);
  };

  async getAllDimensions() {
    return await dimensionModel.find();
  };

  async getLastDimension() {
    return await dimensionModel.find({}).sort({createdAt: -1}).limit(1);
  };

  async deleteDimensionByID(dimensionID: string) {
    return await dimensionModel.findByIdAndDelete(dimensionID);
  };

  // async deleteDimension(dimensionID: string) {
  //   return await dimensionModel.deleteMany({productID: productID});
  // };
};

export default new DimensionService();