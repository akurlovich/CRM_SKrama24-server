import { Document, Schema } from "mongoose";

export interface IPhone extends Document {
  companyID: Schema.Types.ObjectId,
  number: string,
  description: string,
  isActive: boolean,
}

export interface IPhoneUpdate{
  number: string,
  description: string,
}

export interface IPhoneNew {
  companyID: string,
  number: string,
  description: string,
}

export interface IPhoneNewAddContacts {
  contactID: string,
  phone: IPhone,
}