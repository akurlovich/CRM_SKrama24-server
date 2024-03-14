"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(err, req, res, next) {
    // console.log('middle message', err.message)
    // console.log('middle status', err.status)
    // console.log('middle type ', typeof err)
    // console.log('middle', err)
    // if (err instanceof ApiError) {
    //   console.log('!!!!!!!!')
    return res.status(err.status ? err.status : 444).json({ message: err.message, errors: err.errors });
    // }
    // return res.status(500).json({message: 'Непредвиденная ошибка!', errors: err})
}
exports.default = default_1;
