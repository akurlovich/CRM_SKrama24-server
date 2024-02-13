import {  NextFunction, Request, Response } from "express";
import userService from "../services/user-service";
import { validationResult } from 'express-validator';
import ApiError from "../exceptions/api-error";

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Bad validation!', errors.array()))
      }
      // console.log(req.body)
      const { email, password, firstname, lastname, position, isAdmin } = req.body;
      const userData = await userService.registration(email, password, firstname, lastname, position, isAdmin);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (error) {
      next(error);
    }
  };

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      // console.log(req.body)
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (error) {
      next(error);
    }
  };

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
      
    } catch (error) {
      next(error);
    }
  };

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('refreshToken', req.cookies)
      // const { refreshToken } = req.cookies;
      // const userData = await userService.refresh(refreshToken);
      // res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      // console.log('userData', userData)
      return res.json('userData')
    } catch (error) {
      next(error);
    }
  };
  
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  };

  async getUserById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const user = await userService.getUserByID(req.params.id);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  };

  async deleteUserByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const user = await userService.deleteUserByID(req.params.id);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  };

  // async updateUserProfileImage(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id, profileImage } = req.body;
  //     const user = await userService.updateUserProfileImage(id, profileImage);
  //     return res.json(user);
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // async updateUserIsBlocked(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id, isBlocked } = req.body;
  //     const user = await userService.updateUserIsBlocked(id, isBlocked);
  //     return res.json(user);
  //   } catch (error) {
  //     next(error);
  //   }
  // };

};

export default new UserController();