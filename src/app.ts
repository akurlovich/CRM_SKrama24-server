import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import expressWS from 'express-ws';
import fileUpload from 'express-fileupload';
import router from './router/index';
import errorMiddleware from './middlewares/error-middleware';
import config from './common/config';

// interface IMSGProps {
//   id: string,
//   bookTitle: string,
//   method: string,
// };

// const appBase = express();
const app = express();
// const wsInstance = expressWS(appBase);
// const { app } = wsInstance;
// const aWss = wsInstance.getWss();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use(cookieParser());
app.use(cors({
  origin: [config.CLIENT_URL, 'http://skrama24.by', 'http://localhost:3030', 'http://crm.skrama24.by', 'http://192.168.100.80:3030'],
  credentials: true,
}));
app.use('/api/v1', router);
// app.use(errorMiddleware);


mongoose
  .connect(config.DB_CONNECT, {})
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

export default app;
