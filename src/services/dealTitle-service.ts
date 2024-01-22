import dealTitleModel from "../models/dealTitle-model";
import { IDealTitle } from "../types/IDealTitle";


class DealTitleService {
  async addDealTitle(title: string) {
    return await dealTitleModel.create(title);
  };

  async getDealTitleByID(id: string) {
    return await dealTitleModel.findById(id);
  };

  async getAllDealTitles() {
    return await dealTitleModel.find();
  };
};

export default new DealTitleService();