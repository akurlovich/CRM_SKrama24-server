import { Document, Schema } from "mongoose";

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
  find?: {
    [key: string]: string
  }
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