import dealModel from "../models/deal-model";
import { ICompaniesQuery } from "../types/ICompany";
import { IDeal, IDealsQuery, IDealUpdate } from "../types/IDeal";


class DealService {
  async addDeal(deal: IDeal) {
    return await dealModel.create(deal);
  };

  async getDealByID(id: string) {
    return await dealModel.findById(id);
  };

  async getAllDeals() {
    // let { userid, monthlte, daylt, yearlte } = req.query;
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
    // return await dealModel.find({ userID: userid, monthEnd: { $lte: '03'}, dayEnd: { $lt: '14'}, yearEnd: { $lte: '2024' }}).populate([
    //     {
    //       path: "companyID", 
    //     },
    //     {
    //       path: "dealTitleID", 
    //     },
    //     {
    //       path: "userID", 
    //     }
    //   ]);
  };

  async getAllDealsByUserQuery(query: IDealsQuery) {
    console.log('userquery', query)
    return await dealModel.find(query.find).populate(query.query).limit(query.limit).sort(query.sort);
  };

  async getDealsWithQuery(query: ICompaniesQuery) {
    // console.log('filter', query)
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