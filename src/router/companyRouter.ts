import { Router } from 'express';
import companyController from '../controllers/company-controller';

const router = Router();
router.post('/', companyController.addCompany);
router.get('/:id/card', companyController.getCompanyByID);
// router.get('/', companyController.getAllCompanies);
// router.get('/filter', companyController.getAllCompaniesPopulate);
router.get('/', companyController.getAllCompanies);
router.post('/filter', companyController.getAllCompaniesPopulateQuery);
router.post('/item', companyController.getCompanyByIDQuery);
router.delete('/:id', companyController.deleteCompanyByID);

export default router;