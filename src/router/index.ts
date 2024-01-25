import { Router } from 'express';
import commentRouter from './commentRouter';
import companyRouter from './companyRouter';
import contactRouter from './contactRouter';
import dealRouter from './dealRouter';
import dealTitleRouter from './dealTitleRouter';
import dimensionRouter from './dimensionRouter';
import emailRouter from './emailRouter';
import orderItemRouter from './orderItemRouter';
import orderRouter from './orderRouter';
import phoneRouter from './phoneRouter';
import positionRouter from './positionRouter';
import productRouter from './productRouter';
import userRouter from './userRouter';
// import brandRouter from './brandRouter';
// import productRouter from './productRouter';
// import roleRouter from './positionRouter';
// import typeRouter from './typeRouter';
// import productColorRouter from './productColorRouter';
// import productInfoRouter from './productInfoRouter';
// import emailRouter from './emailRouter';

// import userController from '../controllers/user-controller';
// import { body } from 'express-validator';
// import authMiddleware from '../middlewares/auth-middleware';
// import bookController from '../controllers/book-controller';
// import genreController from '../controllers/genre-controller';
// import roleController from '../controllers/role-controller';
// import productController from '../controllers/product-controller';
// import bookedController from '../controllers/booked-controller';
// import issuedController from '../controllers/issued-controller';
// import commentConroller from '../controllers/comment-conroller';

const router = Router();
router.use('/users', userRouter);
router.use('/', positionRouter);
router.use('/dealtitles', dealTitleRouter);
router.use('/dimensions', dimensionRouter);
router.use('/phones', phoneRouter);
router.use('/emails', emailRouter);
router.use('/contacts', contactRouter);
router.use('/companies', companyRouter);
router.use('/comments', commentRouter);
router.use('/deals', dealRouter);
router.use('/', orderRouter);
router.use('/', orderItemRouter);
router.use('/', productRouter);
// router.use('/', productColorRouter);
// router.use('/', productInfoRouter);
// router.use('/', emailRouter);

// router.post('/registration',
//   body('email').isEmail(),
//   body('password').isLength({min: 6, max: 32}),  
//   userController.registration);
// router.post('/login', userController.login);
// router.post('/logout', userController.logout);
// router.get('/refresh', userController.refresh);
// // router.get('/users', authMiddleware, userController.getUsers);
// router.get('/users', userController.getUsers);
// router.get('/users/:id', userController.getUserById);
// router.put('/users/profileImage', userController.updateUserProfileImage);
// router.put('/users/isBlocked', userController.updateUserIsBlocked);

// router.get('/role', roleController.getRole);
// router.get('/role/:id', roleController.getRoleByID);
// router.get('/roles', roleController.getAllRoles);
// router.post('/role', roleController.addRole);

// router.get('/product', productController.getProduct);
// router.get('/product/:id', productController.getProductByID);
// router.get('/products', productController.getAllProducts);
// router.post('/product', productController.addProduct);

// router.get('/books', bookController.getAllBooks);
// router.get('/books/:id', bookController.getBookByID);
// router.post('/books', bookController.addBook);
// router.put('/books', bookController.updateBookAmountByID);

// router.get('/genre', genreController.getGenre);
// router.get('/genre/:id', genreController.getGenreByID);
// router.get('/genres', genreController.getAllGenres);
// router.post('/genres', genreController.addGenre);


// router.get('/booked/books/:id', bookedController.getAllBookedsBookID);
// router.get('/booked/users/:id', bookedController.getAllBookedsUserID);
// router.get('/booked/:id', bookedController.getBookedByID);
// router.get('/bookeds', bookedController.getAllBookeds);
// router.post('/booked', bookedController.addBooked);
// router.delete('/booked/:id', bookedController.deleteBooked);

// router.get('/issued/books/:id', issuedController.getAllIssuedsBookID);
// router.get('/issued/users/:id', issuedController.getAllIssuedsUserID);
// router.get('/issued/:id', issuedController.getIssuedByID);
// router.get('/issueds', issuedController.getAllIssueds);
// router.post('/issued', issuedController.addIssued);
// router.delete('/issued/:id', issuedController.deleteIssued);

// router.get('/comment/books/:id', commentConroller.getAllCommentsBookID);
// router.get('/comment/users/:id', commentConroller.getAllCommentsUserID);
// router.get('/comment/:id', commentConroller.getCommentByID);
// router.get('/comments', commentConroller.getAllComments);
// router.post('/comment', commentConroller.addComment);
// router.put('/comment', commentConroller.updateCommetByModerator);
// router.delete('/comment/:id', commentConroller.deleteComment);

export default router;