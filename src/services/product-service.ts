import productModel from "../models/product-model";
import { IProduct } from "../types/IProduct";
import ApiError from '../exceptions/api-error';

class ProductService {
  async addProduct(product: IProduct) {
    // console.log('title', product.title)
    const newProduct = await productModel.findOne({title: { $regex: product.title, $options: "i" }});
    // console.log("newProduct", newProduct)
    if (newProduct) {
      throw ApiError.BadRequest(`Товар ${product.title} существует!`)
    }
    // console.log('kdsfjslkfsk')
    return await productModel.create(product);
  };

  
  async getProductByID(id: string) {
    return await productModel.findById(id);
  };
  
  async getAllProducts(req: any) {
    let { search } = req.query;
    // const reqex = new ReqExp(search, 'gi')
    if (search) {
      return await productModel.find({title: { $regex: search, $options: "i" }}).limit(30);
      // return await productModel.find().where({title: search})
    }
    return await productModel.find().sort({title: 'asc'});
  };
  
  async updateProduct(product: IProduct) {
    // console.log('update')
    const item = await productModel.findByIdAndUpdate({_id: product._id}, { title: product.title, dimension: product.dimension});
    // console.log(item)
    return await productModel.findByIdAndUpdate({_id: product._id}, { title: product.title, dimension: product.dimension});
  };

  async deleteProductByID(id: string) {
    return await productModel.findByIdAndDelete(id);
  };
};

export default new ProductService();