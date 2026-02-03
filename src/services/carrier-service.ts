import carrierModel from "../models/carrier-model";
import { ICarrier } from "../types/ICarrier";
import { IComment } from "../types/IComment";
import { ICompaniesQuery } from "../types/ICompany";
import { IDeal } from "../types/IDeal";

class CarrierService {
	async addCarrier(carrier: ICarrier) {
		// console.log('add carrier data in Service', carrier)
		if (carrier) {
			const newCarrier = await carrierModel.create(carrier);
			// console.log('newCarrier', newCarrier)
			return newCarrier;
			// return await carrierModel.create(carrier);
		}
		console.log('add carrier - empty carrier data')
	};

	async getAllCarriers() {
		return await carrierModel.find();
	};

	async getCarrierByID(id: string) {
		return await carrierModel.findById(id);
	};

	async getAllCarriersPopulateQuery(query: ICompaniesQuery) {
		// console.log(query)
		const count = await carrierModel.countDocuments(query.find);
		const carriers = await carrierModel.find(query.find).populate(query.query).sort(query.sort).skip((query.page * query.limit) - query.limit).limit(query.limit);

		// console.log(carriers)
		
		return {
			count,
			carriers,
		}
	};

	async getCarrierByIDQuery(query: ICompaniesQuery) {
		// return await companyModel.findOne({ _id: '65a627a2aa381e0a7e61c8bb' })
		// return await companyModel.findOne(query.find).populate(query.query)
		const carrier = await carrierModel.findOne(query.find).populate(query.query);
		// console.log('carrier', carrier)
		// const carriers = await carrierModel.find();
		// console.log('carriers', carriers)
		return carrier;
		// return await carrierModel.findOne(query.find).populate(query.query);
		// return await companyModel.find().populate(query.query).limit(query.limit).sort({'usersID[0].lastname': 'asc'});
	};

	async updateCarrierTitle(carrierID: string, {title}: {title: string}) {
		const carrier = await carrierModel.findByIdAndUpdate({_id: carrierID}, {title});
		// console.log('first', contact)
		// contact.emailsID.push(email._id);
		// await contact.save;
		return carrier;
	};

	async updateCarrierDescription(carrierID: string, {description}: {description: string}) {
			const carrier = await carrierModel.findByIdAndUpdate({_id: carrierID}, {description});
			// console.log('first', contact)
			// contact.emailsID.push(email._id);
			// await contact.save;
			return carrier;
		};

	async updateCarrierAddComment(comment: IComment) {
		const carrier = await carrierModel.updateOne({_id: comment.companyID}, { $push: {commentsID: comment}});
		// console.log('first', contact)
		// contact.emailsID.push(email._id);
		// await contact.save;
		return carrier;
	};

	async updateCarrierAddDeal(deal: IDeal) {
		const carrier = await carrierModel.updateOne({_id: deal.companyID}, { $push: {dealsID: deal}});
		// console.log('first', contact)
		// contact.emailsID.push(email._id);
		// await contact.save;
		return carrier;
	};

	async deleteCarrierByID(id: string) {
		return await carrierModel.findByIdAndDelete(id);
	};

	async deleteDealFromCarrierByDealID(dealID: string) {
		const carrier = await carrierModel.findOne({dealsID: { _id: dealID}});

		const index = carrier.dealsID.findIndex(item => item.toString() == dealID)
		carrier.dealsID.splice(index, 1);
		carrier.save();

		return carrier;
	};
};

export default new CarrierService();