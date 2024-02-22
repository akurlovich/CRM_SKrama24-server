import { Document, Schema } from "mongoose";
import { IComment } from "./IComment";
import { IContact } from "./IContact";
import { IDeal } from "./IDeal";
import { IEmail } from "./IEmail";
import { IOrder } from "./IOrder";
import { IPhone } from "./IPhone";
import { IUser } from "./IUser";

// export interface ICompany extends Document {
//   title: string,
//   usersID: Array<Schema.Types.ObjectId>,
//   description: string,
//   contactID: Schema.Types.ObjectId | string,
//   dealsID: Array<Schema.Types.ObjectId>,
//   ordersID: Array<Schema.Types.ObjectId>,
//   commentsID: Array<Schema.Types.ObjectId>,
// }

export interface ICompany extends Document {
  title: string,
  usersID: Array<Schema.Types.ObjectId>,
  description: string,
  contactID: Schema.Types.ObjectId,
  dealsID: Array<Schema.Types.ObjectId>,
  ordersID: Array<Schema.Types.ObjectId>,
  commentsID: Array<Schema.Types.ObjectId>,
}

interface IQuery {
  path: string,
  select?: string,
  populate?: {
    path: string,
  }
}

export interface ICompaniesQuery {
  query: IQuery[],
  sort: {
    [key: string]: 'asc' | 'desc',
  },
  limit: number,
  page: number,
  find?: {
    [key: string]: string
  }
}

export interface ICompanyPopulate {
  _id: string,
  title: string,
  usersID: IUser[],
  description: string,
  contactID: IContactPopulate,
  // dealsID: IDeal[],
  // ordersID: IOrder[],
  // commentsID: IComment[],
}

interface IContactPopulate {
  _id: string,
  companyID: string,
  address: {
    main: string,
    district: string,
  },
  phonesID: IPhone[],
  emailsID: IEmail[],
}


// export interface ICompany extends Document {
//   title: string,
//   users: [{
//     userID: string,
//     firstname: string,
//     lastname: string,
//   }],
//   description: string,
//   contact: {
//     contactID: string,
//     district: string,
//   },
//   deals: [{
//     dealsID: string,
//     createdAt: string,
//   }],
//   ordersID: string[],
//   comments: [{
//     commentsID: string,
//     createdAt: string,
//   }],
// }