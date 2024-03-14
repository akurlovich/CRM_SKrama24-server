import { NextFunction, Request, Response } from "express";
import ApiError from "../exceptions/api-error";
import productService from "../services/product-service";

class ProductController {
  async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const newProduct = await productService.addProduct(req.body);
      return res.json(newProduct);
    } catch (error) {
      // console.log('error', error)
      // next(ApiError.BadRequest('Test !!!!!!', error));
      next(error);
    }
  };

  async getProductByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const product = await productService.getProductByID(req.params.id);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  };

  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      // const products = await productService.getAllProducts();
      const products = await productService.getAllProducts(req);
      return res.json(products);
    } catch (error) {
      next(error);
    }
  };

  async deleteProductByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const product = await productService.deleteProductByID(req.params.id);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  };
};

export default new ProductController;