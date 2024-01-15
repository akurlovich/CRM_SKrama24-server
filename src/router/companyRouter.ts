import { Router } from 'express';
import companyController from '../controllers/company-controller';

const router = Router();
router.post('/', companyController.addCompany);
router.get('/:id', companyController.getCompanyByID);
router.get('/', companyController.getAllCompanies);
router.delete('/:id', companyController.deleteCompanyByID);

export default router;