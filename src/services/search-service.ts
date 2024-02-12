import companyModel from "../models/company-model";
import emailModel from "../models/email-model";
import phoneModel from "../models/phone-model";

class SearchService {
  
  async getSearchCompanies(search: string) {
    // console.log("search service", search)
    // let { search } = req.query;
    // const reqex = new ReqExp(search, 'gi')
    // if (search) {
      // return await companyModel.find({title: { $regex: search, $options: "i" }}).limit(5);
      return await companyModel.find({title: { $regex: search, $options: "i" }}).populate([
        {
          path: "usersID", 
          select: "lastname firstname"
        },
        {
          path: "contactID", 
          // select: "address.district"
        },
        {
          path: "contactID", 
          populate: { path: 'phonesID' }
        },
        {
          path: "contactID", 
          populate: { path: 'emailsID' }
        },
        // {
        //   path: "dealsID", 
        //   populate: { path: 'dealTitleID' }
        // },
        // {
        //   path: "dealsID", 
        //   populate: { path: 'userID' }
        // },
      ]).limit(5);
      // return await companyModel.find().populate([
      //   {
      //     path: "usersID", 
      //     select: "lastname firstname"
      //   },
      //   {
      //     path: "contactID", 
      //     // select: "address.district"
      //   },
      //   {
      //     path: "contactID", 
      //     populate: { path: 'phonesID' }
      //   },
      //   {
      //     path: "contactID", 
      //     populate: { 
      //       path: 'emailsID', match: {
      //         number: { $regex: search, $options: "i" }
      //         } 
      //       }
      //   },
      //   {
      //     path: "dealsID", 
      //     populate: { path: 'dealTitleID' }
      //   },
      //   {
      //     path: "dealsID", 
      //     populate: { path: 'userID' }
      //   },
      // ]).limit(5);
      // return await productModel.find().where({title: search})
    // }
    // return null;
  };

  async getSearchCompanyPhones(search: string) {
    // let { search } = req.query;
    // const reqex = new ReqExp(search, 'gi')
    if (search) {
      return await phoneModel.find({number: { $regex: search, $options: "i" }}).limit(5);
      // return await productModel.find().where({title: search})
    }
    return null;
  };

  async getSearchCompanyEmails(search: string) {
    // let { search } = req.query;
    // const reqex = new ReqExp(search, 'gi')
    if (search) {
      return await emailModel.find({email: { $regex: search, $options: "i" }}).limit(5);
      // return await productModel.find().where({title: search})
    }
    return null;
  };

  async getCompanyByIDForSearch(id: string) {
    return await companyModel.findById(id).populate([
      {
        path: "usersID", 
        select: "lastname firstname"
      },
    ]).limit(5);;
  };

};

export default new SearchService();