import productModel from "../models/product-model";
import { IProduct } from "../types/IProduct";
import ApiError from '../exceptions/api-error';

class ProductService {
  async addProduct(product: IProduct) {
    const newProduct = await productModel.find({title: { $regex: product.title, $options: "i" }});
    if (newProduct) {
      throw ApiError.BadRequest(`Товар ${product.title} существует!`)
    }
    return await productModel.create(product);
  };

  async getProductByID(id: string) {
    return await productModel.findById(id);
  };
  
  async getAllProducts(req: any) {
    let { search } = req.query;
    // const reqex = new ReqExp(search, 'gi')
    if (search) {
      return await productModel.find({title: { $regex: search, $options: "i" }}).limit(10);
      // return await productModel.find().where({title: search})
    }
    return await productModel.find();
  };

  async deleteProductByID(id: string) {
    return await productModel.findByIdAndDelete(id);
  };
};

export default new ProductService();