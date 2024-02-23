import { Router } from 'express';
import searchController from '../controllers/search-controller';

const router = Router();
router.get('/', searchController.getSearchResult);
router.get('/user', searchController.getSearchResultUserCompanies);
router.get('/district', searchController.getSearchResultDistrictCompanies);

export default router;