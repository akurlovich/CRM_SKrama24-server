import { NextFunction, Request, Response } from "express";
import searchService from "../services/search-service";

class SearchController {
 
  async getSearchResult(req: Request, res: Response, next: NextFunction) {
    try {
      const { search } = req.query;
      // console.log("search", search)

      // const products = await productService.getAllProducts();
      // const result = await searchService.getSearchCompanies(req);
      const result = await searchService.getSearchCompanyPhones(req);
      console.log("result", result)
      // const result = await searchService.getSearchCompanyEmails(req);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  };

 
};

export default new SearchController;