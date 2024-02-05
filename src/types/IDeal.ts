import { Document, Schema } from "mongoose";

export interface IDeal extends Document {
  companyID: Schema.Types.ObjectId,
  userID: Schema.Types.ObjectId,
  dealTitleID: Schema.Types.ObjectId,
  description: string,
  dayEnd: string,
  monthEnd: string,
  yearEnd: string,
  minuteEnd: string,
  hourEnd: string,
  dateEnd: string,
  timeEnd: string,
  isDone: boolean,
}

export interface IDealUpdate {
  userID: Schema.Types.ObjectId,
  description: string,
  dayEnd: string,
  monthEnd: string,
  yearEnd: string,
  minuteEnd: string,
  hourEnd: string,
  dateEnd: string,
  timeEnd: string,
  isDone: boolean,
}

  // "companyID": "65a628f3aa381e0a7e61c8c6",
  // "userID": "65a4ed82f45087cf955a9bac",
  // "dealTitleID": "657c071089e96dedfd490f35",
  // "description": "",
  // "dateEnd": "31.01.2024",
  // "timeEnd": "15:42",
  // "isDone": "false",