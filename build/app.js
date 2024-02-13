"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
// import expressWS from 'express-ws';
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var index_1 = __importDefault(require("./router/index"));
var config_1 = __importDefault(require("./common/config"));
// interface IMSGProps {
//   id: string,
//   bookTitle: string,
//   method: string,
// };
// const appBase = express();
var app = (0, express_1.default)();
// const wsInstance = expressWS(appBase);
// const { app } = wsInstance;
// const aWss = wsInstance.getWss();
app.use(express_1.default.json());
app.use(express_1.default.static('static'));
app.use((0, express_fileupload_1.default)({}));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: [config_1.default.CLIENT_URL, 'http://skrama24.by', 'http://localhost:3030', 'http://crm.skrama24.by', 'http://192.168.100.80:3030']
}));
app.use('/api/v1', index_1.default);
// app.use(errorMiddleware);
mongoose_1.default
    .connect(config_1.default.DB_CONNECT, {})
    .then(function () { return console.log('Connected to DB'); })
    .catch(function (err) { return console.log(err); });
exports.default = app;
