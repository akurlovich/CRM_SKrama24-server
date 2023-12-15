import dealTitleModel from "../models/dealTitle-model";
import { IDealTitle } from "../types/IDealTitle";


class DealTitleService {
  async addDealTitle(dealTitle: IDealTitle) {
    return await dealTitleModel.create(dealTitle);
  };

  async getDealTitleByID(id: string) {
    return await dealTitleModel.findById(id);
  };

  async getAllDealTitles() {
    return await dealTitleModel.find();
  };
};

export default new DealTitleService();