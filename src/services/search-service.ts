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
      return await phoneModel.find({number: { $regex: search, $options: "i" }}).limit(10);
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
    // console.log('service', id);
    return await companyModel.findById(id).populate([
      {
        path: "usersID", 
        select: "lastname firstname"
      },
    ]).limit(5);
  };

  async getSearchResultUserCompanies(userID: string) {
    if (userID) {
      const count = await companyModel.countDocuments({usersID: userID});
      const companies = await companyModel.find({usersID: userID}).populate(
        [
          {
            path: 'contactID', 
            // match: { "address.district": { $regex: search, $options: "i" } }
            // match: { "address.district": /пинск/i } 
          },
          {
            path: "usersID", 
            // select: "lastname firstname"
          },
          {
            path: "commentsID", 
            populate: { path: 'userID' }
          },
          {
            path: "dealsID", 
            // populate: { path: 'dealTitleID' }
          },

        ]
      )
      return {
        count,
        companies,
      }
      // return await productModel.find().where({title: search})
    }
    return null;
  };

  async getSearchResultDistrictCompanies(search: string) {
    // let { search } = req.query;
    // const reqex = new ReqExp(search, 'gi')
    if (search) {
      // return await companyModel.find().populate({
      //   path: 'contactID', 
      //   // match: { "address.district": { $regex: search, $options: "i" } } });
      //   match: { "address.district": /пинск/i } 
      //   }).exec().then((companies) => {
      //     return companies.filter(company => company.contactID != null);

      //   }) 


      // return await companyModel.find({email: { $regex: search, $options: "i" }}).limit(5);
      // return await companyModel.find().populate({
      //   path: 'contactID', 
      //   populate: {
      //     path: 'address', 
      //     match: { district: { $regex: search, $options: "i" } } }});
      return await companyModel.find()
        .populate(
            [
              {
                path: 'contactID', 
                match: { "address.district": { $regex: search, $options: "i" } }
                // match: { "address.district": /пинск/i } 
              },
              {
                path: "usersID", 
                // select: "lastname firstname"
              },
              {
                path: "commentsID", 
                populate: { path: 'userID' }
              },
              {
                path: "dealsID", 
                // populate: { path: 'dealTitleID' }
              },

            ]
          )
        .exec().then((companies) => {
          return companies.filter(company => company.contactID != null);

        }) 
        
    }
    return null;
  };

};

export default new SearchService();