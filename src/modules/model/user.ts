import { Document, Schema, model } from "mongoose";

export const DOCUMENT_NAME = "User";
export const COLLECTION_NAME = "users";

export default interface User extends Document {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  dateOfJoining: Date;
  status: Boolean;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    maxLength: 20,
  },
  email: {
    type: Schema.Types.String,
    require: true,
    maxLength: 100,
    select: false,
  },
  password: {
    type: Schema.Types.String,
    required: true,
    maxLength: 20,
    select: false,
  },
  firsName: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    maxLength: 20,
  },
  lastName: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    maxLength: 20,
  },
  dateOfBrith: {
    type: Schema.Types.Date,
  },
  dateOfJoining: {
    type: Schema.Types.Date,
  },

  bio: {
    type: Schema.Types.String,
  },
  status: {
    type: Schema.Types.Boolean,
    default: true,
  },
  createdAt: { type: Date, required: true, select: false },
  updatedAt: {
    type: Date,
    required: true,
    select: false,
  },
});

export const UserModel = model<User>(DOCUMENT_NAME, schema, COLLECTION_NAME);