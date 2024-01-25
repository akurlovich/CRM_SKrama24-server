import productModel from "../models/product-model";
import { IProduct } from "../types/IProduct";


class ProductService {
  async addProduct(product: IProduct) {
    return await productModel.create(product);
  };

  async getProductByID(id: string) {
    return await productModel.findById(id);
  };

  async getAllProducts() {
    return await productModel.find();
  };

  async deleteProductByID(id: string) {
    return await productModel.findByIdAndDelete(id);
  };
};

export default new ProductService();