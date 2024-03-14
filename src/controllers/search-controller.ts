import { NextFunction, Request, Response } from "express";
import companyService from "../services/company-service";
import searchService from "../services/search-service";
import { ICompanyPopulate } from "../types/ICompany";
import { ISearchResult } from "../types/ISearchResult";

class SearchController {
 
  async getSearchResult(req: Request, res: Response, next: NextFunction) {
    try {
      const { search } = req.query;
      // console.log("search", search)
//@ts-ignore
      const resultCompany: ICompanyPopulate[] = await searchService.getSearchCompanies(search.toString());
      // console.log("search", resultCompany)
      // const resultPhones = await searchService.getSearchCompanyPhones(search.toString());
      // const resultEmails = await searchService.getSearchCompanyEmails(search.toString());

      const result: ISearchResult[] = [] as ISearchResult[];

      if (resultCompany.length) {
        for (let item of resultCompany) {
          const sendItem: ISearchResult = {
            companyID: item._id,
            companyTitle: item.title,
            userFirstName: item.usersID[0] ? item.usersID[0].firstname : '',
            userLastName: item.usersID[0] ? item.usersID[0].lastname : '',
            phoneNumber: item.contactID.phonesID[0] ? item.contactID.phonesID[0].number : '',
            phoneDescription: item.contactID.phonesID[0] ? item.contactID.phonesID[0].description : '',
            emailEmail: item.contactID.emailsID[0] ? item.contactID.emailsID[0].email : '',
            emailDescription: item.contactID.emailsID[0] ? item.contactID.emailsID[0].description : '',
          }
          result.push(sendItem)
        }
        return res.json(result);
      } else {
        const resultPhones = await searchService.getSearchCompanyPhones(search.toString());
        if (resultPhones.length) {
          // console.log(resultPhones)
          for (let item of resultPhones) {
            // console.log(item.companyID.toString());
            //@ts-ignore
            const company: ICompanyPopulate = await searchService.getCompanyByIDForSearch(item.companyID.toString())
            // console.log(company)
            if (company) {
              const sendItem: ISearchResult = {
                companyID: company._id,
                companyTitle: company.title,
                userFirstName: company.usersID[0] ? company.usersID[0].firstname : '',
                userLastName: company.usersID[0] ? company.usersID[0].lastname : '',
                phoneNumber: item.number,
                phoneDescription: item.description ? item.description : '',
                emailEmail: '',
                emailDescription: '',
              }
              result.push(sendItem)
            }
          }
          return res.json(result);
        } else {
          const resultEmails = await searchService.getSearchCompanyEmails(search.toString());
          if (resultEmails.length) {
            for (let item of resultEmails) {
              //@ts-ignore
              const company: ICompanyPopulate = await searchService.getCompanyByIDForSearch(item.companyID.toString())
              const sendItem: ISearchResult = {
                companyID: company._id,
                companyTitle: company.title,
                userFirstName: company.usersID[0] ? company.usersID[0].firstname : '',
                userLastName: company.usersID[0] ? company.usersID[0].lastname : '',
                phoneNumber: '',
                phoneDescription: '',
                emailEmail: item.email,
                emailDescription: item.description ? item.description : '',
              }
              result.push(sendItem)
            }
            return res.json(result);
          } 
        }
      } 


      return res.json(result);
    } catch (error) {
      next(error);
    }
  };

  async getSearchResultUserCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      // console.log(req.query)
      const { search } = req.query;
      // console.log("search1", search)
      const companies = await searchService.getSearchResultUserCompanies(search.toString());
      return res.json(companies);
    } catch (error) {
      next(error);
    }
  };

  async getSearchResultDistrictCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      // console.log(req.query)
      const { search } = req.query;
      // console.log("search2", search)
      const companiesData = await searchService.getSearchResultDistrictCompanies(search.toString());
      return res.json(companiesData);
    } catch (error) {
      next(error);
    }
  };
 
};

export default new SearchController;