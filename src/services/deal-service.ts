import { ObjectId } from "mongoose";
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
    // console.log('userquery', query)

    if (query.overdue) {
      
      if (query.find['userID']) {
        // newQuery['userID']: query.find['userID']
        const newQuery = {
          userID: query.find['userID'],
          // monthEnd: query.find['monthEnd'],
          // yearEnd: query.find['yearEnd'],
          // monthEnd: { '$lte': '04' },
          // dayEnd: { '$lt': '18' },
          // yearEnd: { '$lte': '2024' }
      
        }
        // console.log("monthEnd", query.find['monthEnd'])
        // console.log("dayEnd", query.find['dayEnd'])
        // console.log("newQuery", newQuery)
        //@ts-ignore
        const year: string = query.find.yearEnd.$lte;
        console.log('year', query.find['yearEnd'])
        //@ts-ignore
        const mounth: string = query.find.monthEnd.$lte;
        //@ts-ignore
        const day: string = query.find.dayEnd.$lt;
  
        const data = await dealModel.find(newQuery).populate(query.query).limit(query.limit).sort(query.sort).exec().then((deals) => {
          const readyDeals: IDeal[] = [];
          const readyYear: IDeal[] = deals.filter(item => item.yearEnd < year);
          console.log('readyYear', readyYear)
          const readyMonth: IDeal[] = deals.filter(item => item.monthEnd < mounth);
          const readyDay: IDeal[] = deals.filter(item => item.monthEnd == mounth).filter(item => item.dayEnd < day)
          readyDeals.push(...readyYear)
          readyDeals.push(...readyMonth)
          readyDeals.push(...readyDay)
          return readyDeals;
    
        }) 
        // console.log("data", data)
        return data;

      } else {
        const newQuery = {
          // userID: query.find['userID'],
          // monthEnd: query.find['monthEnd'],
          // yearEnd: query.find['yearEnd'],
          // monthEnd: { '$lte': '04' },
          // dayEnd: { '$lt': '18' },
          // yearEnd: { '$lte': '2024' }
      
        }
        //@ts-ignore
        const year: string = query.find.yearEnd.$lte;
        console.log('year', query.find['yearEnd'])
        //@ts-ignore
        const mounth: string = query.find.monthEnd.$lte;
        //@ts-ignore
        const day: string = query.find.dayEnd.$lt;
        // const mmm = query.find['monthEnd']
        //@ts-ignore
        // console.log("monthEnd", query.find.monthEnd.$lte)
        // console.log("monthEnd", query.find['monthEnd'])
        // console.log("dayEnd", query.find['dayEnd'])
        // console.log("newQuery", newQuery)
  
        const data = await dealModel.find(newQuery).populate(query.query).limit(query.limit).sort(query.sort).exec().then((deals) => {
          const readyDeals: IDeal[] = [];
          const readyYear: IDeal[] = deals.filter(item => item.yearEnd < year);
          console.log('readyYear', readyYear)
          const readyMonth: IDeal[] = deals.filter(item => item.monthEnd < mounth);
          const readyDay: IDeal[] = deals.filter(item => item.monthEnd == mounth).filter(item => item.dayEnd < day)
          readyDeals.push(...readyYear)
          readyDeals.push(...readyMonth)
          readyDeals.push(...readyDay)
          return readyDeals;
    
        }) 
        // console.log("data", data)
        return data;
      }

    }

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

  async deleteAllCompanyDeals(ids: ObjectId[]) {
    return await dealModel.deleteMany({_id: ids});
  };
};

export default new DealService();