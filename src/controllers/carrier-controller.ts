import { NextFunction, Request, Response } from "express";
import carrierService from "../services/carrier-service";
import { ICarrier } from "../types/ICarrier";
import { IContactAddressRequest, IContactRequest } from "../types/IContact";
import contactService from "../services/contact-service";
import phoneService from "../services/phone-service";
import emailService from "../services/email-service";
import dealService from "../services/deal-service";
import commentService from "../services/comment-service";

class CarrierController {
	async addCarrier(req: Request, res: Response, next: NextFunction) {
		try {
			// console.log('carrier server controller', req.body);
			const { carrier, contact }: {carrier: ICarrier, contact: IContactRequest} = req.body;
			const redyContact: IContactAddressRequest = {
				address: {
					main: contact.address.main,
					district: contact.address.district,
				},
			}
			const newContact = await contactService.addContact(redyContact);

			carrier.contactID = newContact._id;

			const newCarrier = await carrierService.addCarrier(carrier);

			await contactService.updateContactCompanyID(newContact._id, newCarrier._id);

			if (contact.phonesID.number) {
				//@ts-ignore
				const phone: IPhone = {
					companyID: newCarrier._id,
					number: contact.phonesID.number,
					description: contact.phonesID.description,
				};
				const newPhone = await phoneService.addPhone(phone);
				await contactService.updateContactAddPhone(newContact._id, newPhone);
			}

			if (contact.emailsID.email) {
				//@ts-ignore
				const email: IEmail = {
					companyID: newCarrier._id,
					email: contact.emailsID.email,
					description: contact.emailsID.description,
				};
	
				const newEmail = await emailService.addEmail(email);
				await contactService.updateContactAddEmail(newContact._id, newEmail);

			}

			// const carriers = await carrierService.getAllCarriers();
			// console.log('all carriers server ', carriers);
			
			return res.json(carrier)
		} catch (error) {
			next(error);
		}
	};

	async getAllCarriers(req: Request, res: Response, next: NextFunction) {
		try {
			const carriers = await carrierService.getAllCarriers();

			return res.json(carriers)
		} catch (error) {
			next(error);
		}
	};

	async getCarrierByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
		try {
			const carrier = await carrierService.getCarrierByID(req.params.id);
			
			return res.json(carrier);
		} catch (error) {
			next(error);
		}
	};

	async getCarrierByIDQuery(req: Request, res: Response, next: NextFunction) {
			try {
				// const { query } = req.body;
				// console.log('query', query);
				// console.log('body', req.body);
				const carrier = await carrierService.getCarrierByIDQuery(req.body);
				// console.log('carrier', carrier)
				return res.json(carrier);
			} catch (error) {
				next(error);
			}
		};

	async getAllCarriersPopulateQuery(req: Request, res: Response, next: NextFunction) {
		try {
			// const { query } = req.body;
			// console.log('query', query);
			// console.log('body', req.body);
			const carriersData = await carrierService.getAllCarriersPopulateQuery(req.body);
			// console.log('companies', companies)
			return res.json(carriersData);
		} catch (error) {
			next(error);
		}
	};

	async updateCarrierTitle(req: Request<{ id: string }>, res: Response, next: NextFunction) {
		try {
			// console.log(req.body)
			const carrier = await carrierService.updateCarrierTitle(req.params.id, req.body);
			// console.log('companies', companies)
			return res.json(carrier);
		} catch (error) {
			next(error);
		}
	};

	async updateCarrierDescription(req: Request<{ id: string }>, res: Response, next: NextFunction) {
			try {
				// console.log(req.body)
				const carrier = await carrierService.updateCarrierDescription(req.params.id, req.body);
				// console.log('companies', companies)
				return res.json(carrier);
			} catch (error) {
				next(error);
			}
		};

	async deleteCarrierByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
		try {
			const carrier = await carrierService.getCarrierByID(req.params.id); 
			await contactService.deleteContactByID(carrier.contactID.toString());
			await dealService.deleteAllCompanyDeals(carrier.dealsID);
			await commentService.deleteAllCompanyComments(carrier.commentsID)

			// console.log(company)
			const carrierDelete = await carrierService.deleteCarrierByID(req.params.id);
			return res.json(carrierDelete);
		} catch (error) {
			next(error);
		}
	};

};

export default new CarrierController();
