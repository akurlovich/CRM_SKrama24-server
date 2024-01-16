import { Document, Schema } from "mongoose";

// export interface IContact extends Document {
//   company: {
//     companyID: string,
//     title: string,
//   },
//   address: string,
//   phonesID: Array<Schema.Types.ObjectId>,
//   emailsID: Array<Schema.Types.ObjectId>,
//   district: string,
// }

export interface IContact extends Document {
  companyID: Schema.Types.ObjectId,
  address: {
    main: string,
    district: string,
  },
  phonesID: Array<Schema.Types.ObjectId>,
  emailsID: Array<Schema.Types.ObjectId>,
  
}

// export interface IContact extends Document {
//   company: {
//     companyID: string,
//     title: string,
//   },
//   address: {
//     main: string,
//     district: string,
//   }
//   phones: [{
//     phonesID: string,
//     number: string,
//     description: string,
//   }],
//   emails: [{
//     emailsID: string,
//     email: string,
//     description: string,
//   }],
// }