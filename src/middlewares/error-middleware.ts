import { NextFunction, Request, Response } from "express";
import ApiError from "../exceptions/api-error";

export default function(err: ApiError, req: Request, res: Response, next: NextFunction) {
  // console.log('middle message', err.message)
  // console.log('middle status', err.status)
  // console.log('middle type ', typeof err)
  // console.log('middle', err)
  // if (err instanceof ApiError) {
  //   console.log('!!!!!!!!')
    return res.status(err.status ? err.status : 444).json({message: err.message, errors: err.errors})
  // }
  // return res.status(500).json({message: 'Непредвиденная ошибка!', errors: err})
}