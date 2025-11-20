import carrierModel from "../models/carrier-model";
import { ICarrier } from "../types/ICarrier";

class CarrierService {
	async addCarrier(carrier: ICarrier) {
		if (carrier) {
			return await carrierModel.create(carrier);
		}
		console.log('add carrier - empty carrier data')
	};

	async getAllCarriers() {
		return await carrierModel.find();
	};
};

export default new CarrierService();