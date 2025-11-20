import { NextFunction, Request, Response } from "express";

class CarrierController {
	async addCarrier(req: Request, res: Response, next: NextFunction) {
		try {

			return res.json()
		} catch (error) {
			next(error);
		}
	};

	async getAllCarriers(req: Request, res: Response, next: NextFunction) {
		try {

			return res.json()
		} catch (error) {
			next(error);
		}
	};

};

export default new CarrierController();
