import dealModel from "../models/deal-model";
import { IDeal, IDealUpdate } from "../types/IDeal";


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

  async updateDealByID(id: string, deal: IDealUpdate) {
    return await dealModel.findByIdAndUpdate({_id: id}, deal);
  };

  async deleteDealByID(id: string) {
    return await dealModel.findByIdAndDelete(id);
  };
};

export default new DealService();