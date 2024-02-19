import UserModel from '../models/user-model';
import bcrypt from 'bcrypt';
import tokenService from './token-service';
import UserDto from '../dtos/user-dto';
import ApiError from '../exceptions/api-error';
// import tokenModel from '../models/token-model';
// import userModel from '../models/user-model';
// import roleModel from '../models/role-model';
// import { DEFAULT_USER_ROLE } from '../constants/index';
import config from '../common/config';
// import jwt from 'jsonwebtoken';

class UserService {
  async registration(email: string, password: string, firstname: string, lastname: string, position: string, isAdmin: boolean) {
    const applicant = await UserModel.findOne({email});
    if (applicant) {
      throw ApiError.BadRequest(`User with ${email} already exists!`, [''])
    }
    const hashPassword = await bcrypt.hash(password, config.SALT);
    // const position = await roleModel.findOne({value: DEFAULT_USER_ROLE});
    const user = await UserModel.create({email, password: hashPassword, firstname, lastname, position, isAdmin});
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    }
  };

  async login(email: string, password: string) {
    const user = await UserModel.findOne({email});
    // console.log('email', email, 'user', user)
    if (user === null) {
      // console.log('user null')
      throw ApiError.BadRequest(`User with ${email} not found!`, [''])
    }
    const isPassword = await bcrypt.compare(password, user.password);
    // console.log('pas', isPassword)
    if (!isPassword) {
      throw ApiError.BadRequest(`User password not valid!`, [''])
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto
    }
  };

  async logout(refreshToken: string) {
    return await tokenService.removeToken(refreshToken);
  };

  async refresh(refreshToken: string) {
    // console.log('refreshToken2', refreshToken)
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    // console.log('userData', userData)
    const tokenFromDB = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id)

    if (!user) {
      throw ApiError.BadRequest('User not found!', [''])
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto
    }
  };

  async getAllUsers() {
    return await UserModel.find();
  };

  async getUserByID(id: string) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw ApiError.BadRequest('User not found!', [''])
    }
    return new UserDto(user);
  };

  async deleteUserByID(id: string) {
    return await UserModel.findByIdAndDelete(id);
  };

  async updateIsAdmin(id: string, isAdmin: any) {
    const user = await UserModel.findByIdAndUpdate({_id: id}, isAdmin);
    if (!user) {
      throw ApiError.BadRequest('User not found!', [''])
    }
    return new UserDto(user);
  };

  // async updateUserProfileImage(id: string, profileImage: string) {
  //   const user = await UserModel.findByIdAndUpdate({_id: id}, {profileImage: profileImage}, {new: true});
  //   if (!user) {
  //     throw ApiError.BadRequest('User not found!', [''])
  //   }
  //   return new UserDto(user);
  // };

  // async updateUserIsBlocked(id: string, isBlocked: boolean) {
  //   const user = await UserModel.findByIdAndUpdate({_id: id}, {isBlocked: isBlocked}, {new: true});
  //   if (!user) {
  //     throw ApiError.BadRequest('User not found!', [''])
  //   }
  //   return new UserDto(user);
  // };
}

export default new UserService();