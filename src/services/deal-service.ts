import dealModel from "../models/deal-model";
import { IDeal } from "../types/IDeal";


class DealService {
  async addDeal(deal: IDeal) {
    return await dealModel.create(deal);
  };

  async getDealByID(id: string) {
    return await dealModel.findById(id);
  };

  async getAllDeals() {
    return await dealModel.find();
  };
};

export default new DealService();