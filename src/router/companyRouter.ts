import { Router } from 'express';
import companyController from '../controllers/company-controller';

const router = Router();
router.post('/company', companyController.addCompany);
router.get('/company/:id', companyController.getCompanyByID);
router.get('/companys', companyController.getAllCompanys);

export default router;