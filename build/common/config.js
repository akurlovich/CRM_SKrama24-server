"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var __dirname = path_1.default.resolve();
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env')
});
exports.default = {
    PORT: process.env['PORT'] || 4040,
    // API_URL: process.env['API_URL'] || 'http://localhost:',
    API_URL: process.env['API_URL'] || 'http://194.62.19.34:',
    NODE_ENV: process.env['NODE_ENV'],
    CLIENT_URL: process.env['CLIENT_URL'] || 'http://localhost:3030',
    // CLIENT_URL: process.env['CLIENT_URL'] || 'https://skrama24.by',
    SALT: process.env['SALT'] || 5,
    JWT_ACCESS_SECRET_KEY: process.env['JWT_ACCESS_SECRET_KEY'] || 'access-secret-key',
    JWT_REFRESH_SECRET_KEY: process.env['JWT_REFRESH_SECRET_KEY'] || 'refresh-secret-key',
    // AUTH_MODE: process.env['AUTH_MODE'] === 'true',
    // DB_CONNECT: process.env['DB_CONNECT'] || 'mongodb://194.62.19.34:27017/crm24',
    DB_CONNECT: process.env['DB_CONNECT'] || 'mongodb://admin:skrama2020@194.62.19.34:27017/crm24',
    // SMTP_HOST: process.env['SMTP_HOST'] || 'smtp.gmail.com',
    // SMTP_PORT: process.env['SMTP_POPT'] || 587,
    // SMTP_USER: process.env['SMTP_USER'] || 'qa.a.kurlovich@gmail.com',
    // SMTP_PASSWORD: process.env['SMTP_PASSWORD'] || '111',
};
