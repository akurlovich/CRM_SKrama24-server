import dealModel from "../models/deal-model";
import { ICompaniesQuery } from "../types/ICompany";
import { IDeal, IDealUpdate } from "../types/IDeal";


class DealService {
  async addDeal(deal: IDeal) {
    return await dealModel.create(deal);
  };

  async getDealByID(id: string) {
    return await dealModel.findById(id);
  };

  async getAllDeals() {
    return await dealModel.find().populate([
      {
        path: "companyID", 
      },
      {
        path: "dealTitleID", 
      },
      {
        path: "userID", 
      }
    ]);
  };

  async getDealsWithQuery(query: ICompaniesQuery) {
    console.log(query)
    return await dealModel.find(query.find).populate(query.query).limit(query.limit).sort(query.sort);
    // return await companyModel.find().populate(query.query).limit(query.limit).sort({'usersID[0].lastname': 'asc'});
  };

  async updateDealByID(id: string, deal: IDealUpdate) {
    return await dealModel.findByIdAndUpdate({_id: id}, deal);
  };

  async deleteDealByID(id: string) {
    return await dealModel.findByIdAndDelete(id);
  };
};

export default new DealService();